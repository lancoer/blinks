import { web3 } from "@coral-xyz/anchor";
import { Seeds } from "./constants";

export class Pdas {
  programId: web3.PublicKey;
  global: web3.PublicKey;
  feeCollector: web3.PublicKey;
  constructor(programId: web3.PublicKey) {
    this.programId = programId;
    this.global = web3.PublicKey.findProgramAddressSync(
      [Seeds.global],
      this.programId
    )[0];

    this.feeCollector = web3.PublicKey.findProgramAddressSync(
      [Seeds.feeCollector],
      this.programId
    )[0];
  }

  getQuoteConfigAccount({ quoteMint }: { quoteMint: web3.PublicKey }) {
    return web3.PublicKey.findProgramAddressSync(
      [Seeds.quoteConfig, quoteMint.toBuffer()],
      this.programId
    )[0];
  }

  getPoolVault({
    poolId,
    mintId,
  }: {
    poolId: web3.PublicKey;
    mintId: web3.PublicKey;
  }) {
    return web3.PublicKey.findProgramAddressSync(
      [Seeds.poolVault, poolId.toBuffer(), mintId.toBuffer()],
      this.programId
    )[0];
  }

  getPoolAccount({ baseMint }: { baseMint: web3.PublicKey }) {
    return web3.PublicKey.findProgramAddressSync(
      [Seeds.pool, baseMint.toBuffer()],
      this.programId
    )[0];
  }

  getDevLocker({
    baseMint,
    dev,
  }: {
    baseMint: web3.PublicKey;
    dev: web3.PublicKey;
  }) {
    return web3.PublicKey.findProgramAddressSync(
      [Seeds.devLocker, baseMint.toBuffer(), dev.toBuffer()],
      this.programId
    )[0];
  }
}
