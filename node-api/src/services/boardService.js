/* eslint-disable no-useless-catch */
// import ApiError from '~/utils/ApiError';
import { slugify } from '~/utils/formatters';
import { boardModel } from '~/models/boardModel';
import ApiError from '~/utils/ApiError';
import { StatusCodes } from 'http-status-codes';
const createNew = async (reqBody) => {
  try {
    // emulator error
    // throw new ApiError(410, 'Board Service: testing error custom Error');
    const newBoard = {
      ...reqBody,
      slugTitle: slugify(reqBody.title),
      slugDesc: slugify(reqBody.description),
    };
    // Gọi tới tầng Model để lưu vào Database
    const createdBoard = await boardModel.createBoard(newBoard);

    // get data from new board by _Id (idOject of MongoDB) 
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId);
    return getNewBoard;
  }
  catch (e) { throw e }
};

const getDetails = async (boardId) => {
  try {
    const board = await boardModel.getDetails(boardId);
    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'board not found!');
    }
    return board;
  }
  catch (e) { throw e }
};

export const boardService = {
  createNew,
  getDetails
}