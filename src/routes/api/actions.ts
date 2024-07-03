import express from 'express';
import { ActionPostRequest, ActionPostResponse } from '@solana/actions';

import { getMetadata } from '@/utils/getMetadata';

const actionsRouter = express.Router();

/** Route buying token with SOLs
 *
 * @query {string} t Token address on Solana network
 * @query {number} amount Token address on Solana network
 */
actionsRouter.post('/buy', async (req, res) => {
  const token = req.query.t;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const amount = parseInt((req.query as any).amount);

  if (token == undefined || typeof token != 'string') return res.sendStatus(404);
  if (Number.isNaN(amount)) return res.sendStatus(400);

  const tokenMetadata = (await getMetadata(token))?.data;

  // TODO: Stylize or show error message
  if (tokenMetadata == undefined) return res.sendStatus(400);

  // FIXME: Can be bad request over here
  // FIXME: Should add real transaction here
  const buyRequest: ActionPostRequest = req.body;
  const buyResponse: ActionPostResponse = {
    transaction: buyRequest.account,
    message: `Buy \$${tokenMetadata.symbol} with ${amount} SOL`,
  };

  res.json(buyResponse);
});

export = actionsRouter;
