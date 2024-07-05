import { Cluster, clusterApiUrl, Keypair } from '@solana/web3.js';
import { DegenFundSdk } from '@/degen-fund-sdk';
import { Wallet } from '@coral-xyz/anchor';

// https://solscan.io/account/8wnpYgATzbThvG8dj8LrzNw3fPFeem2MkExst83WsDtm?cluster=devnet
export const degenFundSdk = new DegenFundSdk({
  walletInfo: new Wallet(
    Keypair.fromSecretKey(
      Buffer.from([
        58, 245, 143, 199, 50, 143, 164, 249, 19, 128, 50, 15, 252, 149, 219, 170, 24, 57, 202, 187, 14, 173, 67, 72, 67, 106, 220, 166, 170, 208, 66, 131, 118,
        10, 251, 17, 252, 82, 110, 48, 48, 92, 192, 140, 152, 153, 137, 188, 154, 190, 232, 108, 145, 74, 5, 171, 13, 227, 59, 200, 164, 116, 162, 138,
      ])
    )
  ),
  rpcEndPoint: clusterApiUrl((process.env.CLUSTER as Cluster) || 'devnet'),
});
