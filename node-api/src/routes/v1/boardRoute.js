import express from 'express';
import {StatusCodes} from 'http-status-codes';
import { boardValidation } from '~/validations/boardValidation.js';
import { boardController } from '~/controllers/boardController.js';
const Router = express.Router();

Router.route('/')
    .get((req, res) => {
        res.status(StatusCodes.OK).json({message: 'Status get!'});
    })
    .post(boardValidation.createNew, boardController.createNew)
    .put((req, res) => {
        res.status(StatusCodes.OK).json({message: 'Status put!'});
    })
    .delete((req, res) => {
        res.status(StatusCodes.OK).json({message: 'Status delete!'});
    }); 

Router.route('/:id')
    .get(boardController.getDetails)
    .put((req, res)=>{

    })
    .delete((req, res)=>{

    });

export const boardRoute = Router;