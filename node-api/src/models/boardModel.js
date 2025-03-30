import Joi from "joi";
import { GET_DATABASE } from "~/config/mongodb";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/models/validators';

// Defind collection ('Name & Schema')
const BOARD_COLLECTION_NAME = "boards";
const BOARD_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  slugTitle: Joi.string().required().trim().strict(),
  description: Joi.string().required().min(3).max(255).trim().strict(),
  columnOrderIds: Joi.array().items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)).default([]),
  createdAt: Joi.date().timestamp('javascript').default(Date.now()),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _detroy: Joi.boolean().default(false),
});



const createBoard = async (data) => { 
  try {
    const createBoardModel = await GET_DATABASE().collection(BOARD_COLLECTION_NAME).insertOne(data);
    return createBoardModel;
  } catch (error) {
    throw new Error(error);
  }
};

const findOneById = async (id) => {
  try {
    const resultId = await GET_DATABASE().collection(BOARD_COLLECTION_NAME).findOne({ _id: id });
    console.log(resultId)
    return resultId;
  } catch (error) { throw new Error(error) }
};
export const boardModel = {
  BOARD_COLLECTION_NAME,
  BOARD_COLLECTION_SCHEMA,
  createBoard,
  findOneById
};