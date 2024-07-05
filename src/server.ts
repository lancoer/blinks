import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

import tradeRouter from './routes/trade';
import apiRouter from './routes/api';

// Server configuration
const app: Express = express();
const port = process.env.PORT || 3000;

// Add static route
app.use(express.static('static'));

// Add routes
app.use('/trade', tradeRouter);
app.use('/api', apiRouter);

// Listen server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
