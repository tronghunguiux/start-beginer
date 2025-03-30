import { env } from '~/config/environment.js';

const URI_CONNECT = env.URI_CONNECT || 'INPUT_YOUR_URI';
const DATABASE_NAME = env.DATABASE_NAME || 'INPUT_YOUR_DATABASE_NAME';
const DB_USER = env.DATABASE_USER || 'root';
const DB_PASS = env.DATABASE_PASS || '123321';

import { MongoClient, ServerApiVersion } from 'mongodb';

let instanceMongoClient = null;
const mongodbClientInstance = new MongoClient(URI_CONNECT, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export const CONNECT_DB = async () => {
    await mongodbClientInstance.connect();
    instanceMongoClient = mongodbClientInstance.db(DATABASE_NAME);
}

export const GET_DATABASE = () => {
    if(!instanceMongoClient) {
        throw new Error('Call connect first');
    }
    return instanceMongoClient;
}

export const CLOSE_DB = async () => {    
    await mongodbClientInstance.close();
    // console.log('5. Clean up done');
}