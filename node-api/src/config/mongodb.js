import dotenv from 'dotenv';
dotenv.config();

const URI_CONNECT = process.env.MONGODB_URI || 'INPUT_YOUR_URI';
const DATABASE_NAME = process.env.DATABASE_NAME || 'INPUT_YOUR_DATABASE_NAME';
const DB_USER = process.env.MONGODB_USER || 'root';
const DB_PASS = process.env.MONGODB_PASSWORD || '123321';

