/* eslint-disable no-useless-catch */
// import ApiError from '~/utils/ApiError';
import { slugify } from '~/utils/formatters';
const createNew = async (reqBody) => {
    try{
        // emulator error
        // throw new ApiError(410, 'Board Service: testing error custom Error');
        const newBoard = { 
            ...reqBody,
            slugTitle: slugify(reqBody.title),
            slugDesc: slugify(reqBody.description),  
        };
        // Gọi tới tầng Model để lưu vào Database
        
        return newBoard;
    }
    catch(e){ throw e }
};

export const boardService = {
    createNew
}