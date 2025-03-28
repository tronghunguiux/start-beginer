import {StatusCodes} from 'http-status-codes';
import { ApiError } from "~/utils/apiError";

const createNew = async (req, res, next) => { 
  try {
    // console.log('req.body:', req.body);
    // console.log('req.query:', req.query);
    // console.log('req.params:', req.params);
    // console.log('req.files:', req.files);
    // console.log('req.cookies:', req.cookies);
    // console.log('req.jwtDecoded:', req.jwtDecoded);


    // Điều hướng dữ liệu sang tăng Service 
    throw new ApiError(StatusCodes.BAD_GATEWAY, 'testing error') 
    // Có kết quả thì trả về phía Client 
    res.status(StatusCodes.CREATED).json({ message: 'POST from Controller: API create new board' }) 
  }
  catch (error) { next(error) }
}

export const boardController = {
  createNew
}