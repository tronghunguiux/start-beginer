import express from 'express';
import {StatusCodes} from 'http-status-codes';
import { boardRoute } from '~/routes/v1/boardRoute.js';

const Router = express.Router();

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({message: 'Status Already!'});
});

// Board Routes APIs
Router.use('/boards', boardRoute);

export const APIv1 = Router;