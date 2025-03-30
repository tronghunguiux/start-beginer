import {StatusCodes} from 'http-status-codes';
// import ApiError from "~/utils/apiError";
import { boardService } from '~/services/boardService';

const createNew = async (req, res, next) => { 
  try {
    // console.log('req.body:', req.body);
    // console.log('req.query:', req.query);
    // console.log('req.params:', req.params);
    // console.log('req.files:', req.files);
    // console.log('req.cookies:', req.cookies);
    // console.log('req.jwtDecoded:', req.jwtDecoded);

    // Điều hướng dữ liệu sang tầng Service 
    const createBoard = await boardService.createNew(req.body);
    // throw new ApiError(StatusCodes.BAD_GATEWAY, 'Board Controller: testing error custom Error') 
    // Có kết quả thì trả về phía Client 
    res.status(StatusCodes.CREATED).json(createBoard);
  } 
  catch (error) { next(error) }
}

export const boardController = {
  createNew
}