import express from 'express';
import cors from 'cors';

import actionsRouter from './actions';
import bodyParser from 'body-parser';

const apiRouter = express.Router();

apiRouter.use(cors());
apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());

apiRouter.use(actionsRouter);

export = apiRouter;
