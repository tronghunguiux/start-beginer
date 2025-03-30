import Joi from "joi";
import { GET_DATABASE } from "~/config/mongodb";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/models/validators';
import { ObjectId } from 'mongodb';

// Defind collection ('Name & Schema')
const BOARD_COLLECTION_NAME = "boards";
const BOARD_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  slugTitle: Joi.string().required().trim().strict(),
  description: Joi.string().required().min(3).max(255).trim().strict(),
  slugDesc: Joi.string().required().trim().strict(),
  columnOrderIds: Joi.array().items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)).default([]),
  createdAt: Joi.date().timestamp('javascript').default(Date.now()),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _detroy: Joi.boolean().default(false),
});

const validatorBeforeCreate = async (data) => {
  try {
    return await BOARD_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false });
  } catch (error) {
    throw new Error(error);
  }
};

const createBoard = async (data) => { 
  
  try {
    const validData = await validatorBeforeCreate(data);
    console.log('validData Board Model:', validData);
    const createBoardModel = await GET_DATABASE().collection(BOARD_COLLECTION_NAME).insertOne(validData);
    return createBoardModel;
  } catch (error) {
    throw new Error(error);
  }
};

const findOneById = async (id) => {
  try {
    
    const resultId = await GET_DATABASE().collection(BOARD_COLLECTION_NAME).findOne({ _id: new ObjectId(id) });
    
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