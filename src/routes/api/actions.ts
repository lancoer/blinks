import express from 'express';
import { PublicKey } from '@solana/web3.js';
import { ActionPostRequest, ActionPostResponse } from '@solana/actions';
import { NATIVE_MINT } from '@solana/spl-token';

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
  const amount = parseInt((req.query as any).amount);

  if (token == undefined || typeof token != 'string') return res.sendStatus(404);
  if (Number.isNaN(amount)) return res.sendStatus(400);

  const tokenMetadata = (await getMetadata(token))?.data;

  // TODO: Stylize or show error message
  if (tokenMetadata == undefined) return res.sendStatus(400);

  // TODO: Check whether pool exists too

  // FIXME: Can be bad request over here
  const buyRequest: ActionPostRequest = req.body;

  const buyInstructions = [
    await degenFundSdk.swapQuoteInputInstruction({
      mint: NATIVE_MINT.toString(),
      amountIn: amount,
      minimumAmountOut: 0,
      tokenProgram: new PublicKey(token),
    }),
  ];

  const buyTransaction = await prepareTransaction(buyInstructions, new PublicKey(buyRequest.account));

  const buyResponse: ActionPostResponse = {
    transaction: Buffer.from(buyTransaction.serialize()).toString('base64'),
    message: `Buy \$${tokenMetadata.symbol} with ${amount} SOL`,
  };

  res.json(buyResponse);
});

export = actionsRouter;
