import { PublicKey, TransactionInstruction, TransactionMessage, VersionedTransaction } from '@solana/web3.js';

import { degenFundSdk } from './degenFundSdk';

export async function prepareTransaction(instructions: TransactionInstruction[], payer: PublicKey) {
  const blockhash = await degenFundSdk.connection.getLatestBlockhash({ commitment: 'max' }).then((res: any) => res.blockhash);
  const messageV0 = new TransactionMessage({
    payerKey: payer,
    recentBlockhash: blockhash,
    instructions,
  }).compileToV0Message();

  return new VersionedTransaction(messageV0);
}
