import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import actionsRouter from './actions';

const apiRouter = express.Router();

apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());
apiRouter.use(cors());

apiRouter.use('/actions', actionsRouter);

export = apiRouter;
