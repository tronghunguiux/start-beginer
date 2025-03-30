/* eslint-disable no-useless-catch */
// import ApiError from '~/utils/ApiError';
import { slugify } from '~/utils/formatters';
import { boardModel } from '~/models/boardModel';
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
    // console.log('createBoard:', createdBoard);

    // get data from new board by _Id (idOject of MongoDB) 
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId);
    // console.log('getNewBoard:', getNewBoard);

    return getNewBoard;
  }
  catch (e) { throw e }
};

export const boardService = {
  createNew
}