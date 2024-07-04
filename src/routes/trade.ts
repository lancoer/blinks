import express from 'express';
import { ActionGetResponse, ACTIONS_CORS_HEADERS } from '@solana/actions';

import { getMetadata } from '@/utils/getMetadata';
import { getIpfsJson } from '@/utils/getIpfsJson';

const tradeRouter = express.Router();

tradeRouter.use((_, res, next) => {
  // TODO: Restrict to x.com or twitter.com
  res.header(ACTIONS_CORS_HEADERS);

  next();
});

/** Route serving buying actions
 *
 * @query {string} t Token address on Solana network
 */
tradeRouter.get('/buy', async (req, res) => {
  const token = req.query.t;

  if (token == undefined || typeof token != 'string') return res.sendStatus(404);

  const tokenMetadata = (await getMetadata(token))?.data;

  // TODO: Stylize or show error message
  if (tokenMetadata == undefined) return res.sendStatus(400);

  const buyResponse: ActionGetResponse = {
    icon: (await getIpfsJson(tokenMetadata.uri)).image,
    label: '0.1 SOL',
    title: `Buy ${tokenMetadata.symbol} with your SOLs`,
    description: `Buy ${tokenMetadata.name} on Degen Fund with your SOLs.`,
    links: {
      actions: [
        { label: '0.1 SOL', href: `/api/actions/buy?t=${token}&amount=0.1` },
        { label: '0.5 SOL', href: `/api/actions/buy?t=${token}&amount=0.5` },
        { label: '5 SOL', href: `/api/actions/buy?t=${token}&amount=5` },
        {
          label: 'Buy',
          href: `/api/actions/buy?t=${token}&amount={amount}`,
          parameters: [{ name: 'amount', label: 'Enter your custom SOL amount', required: true }],
        },
      ],
    },
  };

  res.json(buyResponse);
});

/** Route serving buying with custom amount action
 *
 * @param {number} amount custom SOL amount to buy token
 * @query {string} t Token address on Solana network
 */
tradeRouter.get('/buy/:amount', async (req, res) => {
  const token = req.query.t;
  const amount = parseInt((req.params as any).amount);

  if (token == undefined || typeof token != 'string') return res.sendStatus(404);
  if (Number.isNaN(amount)) return res.sendStatus(400);

  const tokenMetadata = (await getMetadata(token))?.data;

  // TODO: Stylize or show error message
  if (tokenMetadata == undefined) return res.sendStatus(400);

  const buyCustomResponse: ActionGetResponse = {
    icon: (await getIpfsJson(tokenMetadata.uri)).image,
    label: `${amount} SOL`,
    title: `Buy ${tokenMetadata.symbol} with your SOLs`,
    description: `Buy ${tokenMetadata.name} on Degen Fund with your SOLs.`,
  };

  res.json(buyCustomResponse);
});

export = tradeRouter;
