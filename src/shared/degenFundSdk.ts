import { clusterApiUrl, Keypair } from '@solana/web3.js';
import { DegenFundSdk } from '@/degen-fund-sdk';
import { Wallet } from '@coral-xyz/anchor';

export const degenFundSdk = new DegenFundSdk({ walletInfo: new Wallet(Keypair.generate()), rpcEndPoint: clusterApiUrl('mainnet-beta') });
