import express from 'express';
import { PublicKey } from '@solana/web3.js';
import { ActionPostRequest, ActionPostResponse } from '@solana/actions';

import { getMetadata } from '@/utils/getMetadata';
import { degenFundSdk } from '@/shared/degenFundSdk';
import { prepareTransaction } from '@/shared/prepareTransaction';

const actionsRouter = express.Router();

/** Route buying token with SOLs
 *
 * @query {string} t Token address on Solana network
 * @query {number} amount Token address on Solana network
 */
actionsRouter.post('/buy', async (req, res) => {
  const token = req.query.t;
  const amount = parseFloat((req.query as any).amount);

  if (token == undefined || typeof token != 'string') return res.sendStatus(404);
  if (Number.isNaN(amount)) return res.sendStatus(400);

  const { tokenMetadata, tokenOwner } = await getMetadata(token);

  // TODO: Stylize or show error message
  if (tokenMetadata == null) return res.sendStatus(400);

  // TODO: Check whether pool exists too

  // FIXME: Can be bad request over here
  const buyRequest: ActionPostRequest = req.body;

  const payer = new PublicKey(buyRequest.account);

  const buyInstructions = [
    await degenFundSdk.initializeUserAtaInstruction({
      mint: token,
      tokenProgram: tokenOwner,
      payer,
    }),
    ...(await degenFundSdk.getWrapSolInx(amount)),
    await degenFundSdk.swapQuoteInputInstruction({
      mint: token,
      amountIn: amount,
      minimumAmountOut: 0,
      tokenProgram: tokenOwner,
    }),
  ];

  const buyTransaction = await prepareTransaction(buyInstructions, payer);

  // degenFundSdk.provider.sendAndConfirm(buyTransaction, [], { skipPreflight: true });

  const buyResponse: ActionPostResponse = {
    transaction: Buffer.from(buyTransaction.serialize()).toString('base64'),
    message: `Bought \$${tokenMetadata.symbol} with ${amount} SOL`,
  };

  res.json(buyResponse);
});

export = actionsRouter;
