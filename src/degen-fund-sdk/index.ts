/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnchorProvider, Program, Wallet, web3, BN, Idl } from '@coral-xyz/anchor';
import { DegenFund } from '../../target/types/degen_fund';
import DegenFundIDL from '../../target/idl/degen_fund.json';
import { Result, TxPassResult } from './types';
import { DegenFundError } from './error';
import { BPS_DENOMINATOR, PROGRAMS, WSOL } from './constants';
import { Pdas } from './pdas';
import { calcNonDecimalValue, generateRandomSeed, getPubkeyFromStr, parseUnits } from './utils';
import {
  TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountIdempotentInstruction,
  createAssociatedTokenAccountInstruction,
  createCloseAccountInstruction,
  createSyncNativeInstruction,
  getAssociatedTokenAddressSync,
} from '@solana/spl-token';
import { PublicKey, SystemProgram, Transaction, TransactionInstruction } from '@solana/web3.js';

const { systemProgram, associatedTokenProgram } = PROGRAMS;

const PRIORITY_RATE = 1_500_000;

const treasury = new PublicKey('8Edn6yngeUoCHj7C9tfZoj4u9f5sKZBgUf16u5wrwuWF');

const admin = new PublicKey('dev6AMdRCezC37X2RgdVnBUhka1zeKnHinBvwhPW4bg');

export type Global = {
  antibotServer: web3.PublicKey;
  tradingPaused: boolean;
};

export type QuoteConfig = {
  quoteMint: web3.PublicKey;
  seeder: web3.PublicKey;
  tradingFeeBps: number;
  seedingFeeBps: number;
};

export type Pool = {
  creator: web3.PublicKey;
  baseMint: web3.PublicKey;
  quoteMint: web3.PublicKey;
  baseProgram: web3.PublicKey;
  quoteProgram: web3.PublicKey;
  baseReserve: BN;
  quoteReserve: BN;
  maxBuyWallet: BN;
  startTime: BN;
  isFilled: boolean;
};

export type TokenParams = {
  name: string;
  symbol: string;
  uri: string;
  transferTax: number;
};

export type CurveParams = {
  quoteDelta: BN;
  maxBuyWallet: BN;
  startTime: BN;
  antibotEnabled: boolean;
  devLockDuration: BN;
  sellTaxBps: number;
  isUnsellable: boolean;
};
export class DegenFundSdk {
  public program: Program<DegenFund>;
  public connection: web3.Connection;
  public provider: AnchorProvider;

  pdas: Pdas;
  constructor(input: { walletInfo: Wallet | AnchorProvider; rpcEndPoint: string }) {
    const { rpcEndPoint, walletInfo } = input;
    this.connection = new web3.Connection(rpcEndPoint);
    if (walletInfo instanceof AnchorProvider) {
      this.provider = walletInfo;
    } else {
      this.provider = new AnchorProvider(this.connection, walletInfo, {
        commitment: 'confirmed',
      });
    }
    this.program = new Program(DegenFundIDL as DegenFund, this.provider);
    this.pdas = new Pdas(this.program.programId);
  }

  async initFeeCollector(): Promise<Result<TxPassResult>> {
    const owner = this.provider.publicKey;
    if (!owner) return { Err: DegenFundError.WALLET_NOT_FOUND };
    const txSignature = await this.program.methods
      .initializeFeeCollector({
        treasury,
        vault: treasury,
        revShareBps: 0,
      })
      .rpc()
      .catch((initFeeCollectorError) => {
        console.error({ initFeeCollectorError });
        return null;
      });
    if (!txSignature) return { Err: DegenFundError.TX_FAILED };
    return { Ok: { txSignature } };
  }

  async initGlobal(antibotServer: PublicKey): Promise<Result<TxPassResult>> {
    const owner = this.provider.publicKey;
    if (!owner) return { Err: DegenFundError.WALLET_NOT_FOUND };
    const txSignature = await this.program.methods
      .initializeGlobal({
        antibotServer,
      })
      .rpc()
      .catch((initGlobalError) => {
        console.error({ initGlobalError });
        return null;
      });
    if (!txSignature) return { Err: DegenFundError.TX_FAILED };
    return { Ok: { txSignature } };
  }

  async initQuoteConfig(seeder: PublicKey, tradingFeeBps: number, seedingFeeBps: number): Promise<Result<TxPassResult>> {
    const owner = this.provider.publicKey;
    if (!owner) return { Err: DegenFundError.WALLET_NOT_FOUND };

    const feeCollector = this.pdas.feeCollector;
    const feeVault = getAssociatedTokenAddressSync(WSOL, feeCollector, true, PROGRAMS.tokenProgram);

    const txSignature = await this.program.methods
      .initializeQuoteConfig({
        seeder,
        tradingFeeBps,
        seedingFeeBps,
      })
      .accounts({
        quoteMint: WSOL,
        feeVault,
      })
      .rpc()
      .catch((initQuoteConfigError) => {
        console.error({ initQuoteConfigError });
        return null;
      });
    if (!txSignature) return { Err: DegenFundError.TX_FAILED };
    return { Ok: { txSignature } };
  }

  async initializeSplPool(input: {
    tokenParams: TokenParams;
    curveParams: CurveParams;
    buyAmount: number;
  }): Promise<Result<TxPassResult & { poolId: string; mintId: string }>> {
    const feePayer = this.provider.publicKey;
    if (!feePayer) return { Err: DegenFundError.WALLET_NOT_FOUND };

    const baseMintKp = web3.Keypair.generate();

    const baseMint = baseMintKp.publicKey;
    const quoteMint = WSOL;

    const [metadata] = web3.PublicKey.findProgramAddressSync(
      [Buffer.from('metadata'), PROGRAMS.tokenMetadataProgram.toBuffer(), baseMint.toBuffer()],
      PROGRAMS.tokenMetadataProgram
    );

    const pool = this.pdas.getPoolAccount({ baseMint: baseMint });

    const devLockerInstructions: {
      pda: PublicKey | null;
      pre: TransactionInstruction[];
      post: TransactionInstruction[];
    } = {
      pda: null,
      pre: [],
      post: [],
    };

    const isT22 = !!input.tokenParams.transferTax;

    const tokenProgram = isT22 ? PROGRAMS.token2022Program : PROGRAMS.tokenProgram;

    const isDevLocked = !input.curveParams.devLockDuration.isZero();

    if (isDevLocked) {
      const devLocker = this.pdas.getDevLocker({
        baseMint: baseMint,
        dev: feePayer,
      });

      const devLockerVault = getAssociatedTokenAddressSync(baseMint, devLocker, true, tokenProgram);

      const createDevLockerVaultInx = createAssociatedTokenAccountIdempotentInstruction(feePayer, devLockerVault, devLocker, baseMint, tokenProgram);

      const createDevLockerInx = await this.program.methods
        .initializeDevLocker(input.curveParams.devLockDuration)
        .accounts({
          user: feePayer,
          baseMint,
        })
        .instruction();

      devLockerInstructions.pda = devLocker;
      devLockerInstructions.pre = [createDevLockerInx];
      devLockerInstructions.post = [createDevLockerVaultInx];
    }

    const buyInstruction: {
      post: TransactionInstruction[];
    } = {
      post: [],
    };

    if (input.buyAmount) {
      buyInstruction.post = [
        await this.initializeUserAtaInstruction({
          mint: baseMint.toBase58(),
          tokenProgram,
        }),
        ...(await this.getWrapSolInx(input.buyAmount)),
        await this.swapQuoteInputInstruction({
          mint: baseMint.toBase58(),
          amountIn: input.buyAmount,
          minimumAmountOut: 0,
          tokenProgram,
          isDevLocked,
        }),
      ];
    }

    const method = isT22
      ? this.program.methods.initializeSpl22Pool(input.tokenParams, input.curveParams).accounts({
          payer: feePayer,
          baseMint,
          quoteMint,
          devLocker: devLockerInstructions.pda,
        } as any)
      : this.program.methods.initializeSplPool(input.tokenParams, input.curveParams).accounts({
          payer: feePayer,
          baseMint,
          quoteMint,
          metadata,
          devLocker: devLockerInstructions.pda,
        } as any);

    const txSignature = await method
      .preInstructions([
        web3.ComputeBudgetProgram.setComputeUnitPrice({
          microLamports: PRIORITY_RATE,
        }),
        ...devLockerInstructions.pre,
      ])
      .postInstructions([...devLockerInstructions.post, ...buyInstruction.post])
      .signers([baseMintKp])
      .rpc();
    if (!txSignature) return { Err: DegenFundError.TX_FAILED };

    return {
      Ok: {
        txSignature,
        poolId: pool.toBase58(),
        mintId: baseMint.toBase58(),
      },
    };
  }

  async getWrapSolInx(amount: number): Promise<TransactionInstruction[]> {
    const wsolTokenAccount = getAssociatedTokenAddressSync(WSOL, this.provider.publicKey, true, PROGRAMS.tokenProgram);

    const createAta = createAssociatedTokenAccountIdempotentInstruction(this.provider.publicKey, wsolTokenAccount, this.provider.publicKey, WSOL);

    // Instruction for sender to fund their WSol token account
    const solTransferInstruction = SystemProgram.transfer({
      fromPubkey: this.provider.publicKey,
      toPubkey: wsolTokenAccount,
      lamports: BigInt(parseUnits(amount, 9).toString()),
    });

    const syncWrappedSolInstruction = createSyncNativeInstruction(wsolTokenAccount);

    return [createAta, solTransferInstruction, syncWrappedSolInstruction];
  }

  async getUnwrapSolInx(): Promise<TransactionInstruction[]> {
    const wsolTokenAccount = getAssociatedTokenAddressSync(WSOL, this.provider.publicKey, true, PROGRAMS.tokenProgram);

    const closeAccountIx = createCloseAccountInstruction(wsolTokenAccount, this.provider.publicKey, this.provider.publicKey);

    return [closeAccountIx];
  }

  async swapQuoteInputInstruction(input: { mint: string; amountIn: number; minimumAmountOut: number; isDevLocked?: boolean; tokenProgram: web3.PublicKey }) {
    const buyer = this.provider.publicKey;

    const baseMint = new PublicKey(input.mint);

    const amountIn = parseUnits(input.amountIn, 9);
    const minimumAmountOut = parseUnits(input.minimumAmountOut, 6);

    const userBaseAta = getAssociatedTokenAddressSync(baseMint, buyer, true, input.tokenProgram);

    const userQuoteAta = getAssociatedTokenAddressSync(WSOL, buyer, true, TOKEN_PROGRAM_ID);

    const feeCollector = this.pdas.feeCollector;

    const feeVault = getAssociatedTokenAddressSync(WSOL, feeCollector, true, TOKEN_PROGRAM_ID);

    const devLocker = this.pdas.getDevLocker({
      baseMint,
      dev: buyer,
    });

    const devLockerVault = getAssociatedTokenAddressSync(baseMint, devLocker, true, input.tokenProgram);

    const instruction = await this.program.methods
      .swapQuoteInput(amountIn, minimumAmountOut)
      .accounts({
        user: buyer,
        baseMint,
        quoteMint: WSOL,
        userBaseAta,
        userQuoteAta,
        devLocker: input.isDevLocked ? devLocker : null,
        devLockerVault: input.isDevLocked ? devLockerVault : null,
        feeVault,
        tokenProgram: input.tokenProgram,
      } as any)
      .instruction();

    return instruction;
  }

  async swapQuoteOutputInstruction(input: { mint: string; amountIn: number; minimumAmountOut: number; isDevLocked?: boolean; tokenProgram: web3.PublicKey }) {
    const buyer = this.provider.publicKey;

    const baseMint = new PublicKey(input.mint);

    const amountIn = parseUnits(input.amountIn, 6);
    const minimumAmountOut = parseUnits(input.minimumAmountOut, 9);

    const userBaseAta = getAssociatedTokenAddressSync(baseMint, buyer, true, input.tokenProgram);

    const userQuoteAta = getAssociatedTokenAddressSync(WSOL, buyer, true, TOKEN_PROGRAM_ID);

    const feeCollector = this.pdas.feeCollector;

    const feeVault = getAssociatedTokenAddressSync(WSOL, feeCollector, true, TOKEN_PROGRAM_ID);

    const devLocker = this.pdas.getDevLocker({
      baseMint,
      dev: buyer,
    });

    const devLockerVault = getAssociatedTokenAddressSync(baseMint, devLocker, true, input.tokenProgram);

    const instruction = await this.program.methods
      .swapQuoteOutput(amountIn, minimumAmountOut)
      .accounts({
        user: buyer,
        baseMint,
        quoteMint: WSOL,
        userBaseAta,
        userQuoteAta,
        feeVault,
        tokenProgram: input.tokenProgram,
        program: '', // FIXME: This is wrong
      })
      .instruction();

    return instruction;
  }

  async initializeUserAtaInstruction(input: { mint: string; tokenProgram: web3.PublicKey }) {
    const buyer = this.provider.publicKey;
    const baseMint = new PublicKey(input.mint);

    const userBaseAta = getAssociatedTokenAddressSync(baseMint, buyer, true, input.tokenProgram);

    const userQuoteAta = getAssociatedTokenAddressSync(WSOL, buyer, true, TOKEN_PROGRAM_ID);

    return await this.program.methods
      .initializeUserAta()
      .accounts({
        user: buyer,
        baseMint,
        quoteMint: WSOL,
        userBaseAta,
        userQuoteAta,
        tokenProgram: input.tokenProgram,
      })
      .instruction();
  }

  async swapQuoteInput(input: {
    mint: string;
    amountIn: number;
    minimumAmountOut: number;
    tokenProgram: web3.PublicKey;
    isDevLocked: boolean;
  }): Promise<Result<TxPassResult>> {
    const feePayer = this.provider.publicKey;
    if (!feePayer) return { Err: DegenFundError.WALLET_NOT_FOUND };

    const instructions = [
      await this.initializeUserAtaInstruction({
        mint: input.mint,
        tokenProgram: input.tokenProgram,
      }),
      ...(await this.getWrapSolInx(input.amountIn)),
      await this.swapQuoteInputInstruction({
        mint: input.mint,
        amountIn: input.amountIn,
        minimumAmountOut: input.minimumAmountOut,
        tokenProgram: input.tokenProgram,
        isDevLocked: input.isDevLocked,
      }),
    ];

    const txSignature = await this.provider.sendAndConfirm(new Transaction().add(...instructions));

    if (!txSignature) return { Err: DegenFundError.TX_FAILED };

    return { Ok: { txSignature } };
  }

  async swapQuoteOutput(input: { mint: string; amountIn: number; minimumAmountOut: number; tokenProgram: web3.PublicKey }): Promise<Result<TxPassResult>> {
    const feePayer = this.provider.publicKey;
    if (!feePayer) return { Err: DegenFundError.WALLET_NOT_FOUND };

    const instructions = [
      await this.initializeUserAtaInstruction({
        mint: input.mint,
        tokenProgram: input.tokenProgram,
      }),
      await this.swapQuoteOutputInstruction({
        mint: input.mint,
        amountIn: input.amountIn,
        minimumAmountOut: input.minimumAmountOut,
        tokenProgram: input.tokenProgram,
      }),
      ...(await this.getUnwrapSolInx()),
    ];

    const txSignature = await this.provider.sendAndConfirm(new Transaction().add(...instructions));

    if (!txSignature) return { Err: DegenFundError.TX_FAILED };

    return { Ok: { txSignature } };
  }

  async getGlobal(): Promise<Global | null> {
    const global = await this.program.account.global.fetch(this.pdas.global);

    if (!global) return null;
    return { ...global };
  }

  async getQuoteConfig(quoteMint: PublicKey): Promise<QuoteConfig | null> {
    const quoteConfig = this.pdas.getQuoteConfigAccount({ quoteMint });
    const quoteConfigInfo = await this.program.account.quoteConfig.fetch(quoteConfig);

    if (!quoteConfigInfo) return null;
    return { ...quoteConfigInfo };
  }

  async getPool(poolId: PublicKey): Promise<Pool | null> {
    const poolInfo = await this.program.account.pool.fetch(poolId);

    if (!poolInfo) return null;

    return {
      ...poolInfo,
    };
  }
}
