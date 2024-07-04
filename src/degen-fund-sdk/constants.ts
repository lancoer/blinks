import { web3 } from '@coral-xyz/anchor';
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_2022_PROGRAM_ID, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';

export const Seeds = {
  global: Buffer.from('global'),
  feeCollector: Buffer.from('fee_collector'),
  quoteConfig: Buffer.from('quote_config'),
  mint: Buffer.from('mint'),
  poolVault: Buffer.from('pool_vault'),
  pool: Buffer.from('pool'),
  devLocker: Buffer.from('dev_locker'),
};

const TOKEN_METADATA_PROGRAM_ID = new PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');

export const BPS_DENOMINATOR = 10_000;

export const PROGRAMS = {
  systemProgram: web3.SystemProgram.programId,
  tokenProgram: TOKEN_PROGRAM_ID,
  token2022Program: TOKEN_2022_PROGRAM_ID,
  associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
  tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
};

export const WSOL = new PublicKey('So11111111111111111111111111111111111111112');
