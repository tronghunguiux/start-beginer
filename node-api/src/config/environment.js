import dotenv from 'dotenv';
dotenv.config();

export const env = {
    URI_CONNECT: process.env.MONGODB_URI || 'INPUT_YOUR_URI',
    DATABASE_NAME: process.env.DATABASE_NAME || 'INPUT_YOUR_DATABASE_NAME',
    DATABASE_USER: process.env.MONGODB_USER || 'root',
    DATABASE_PASS: process.env.MONGODB_PASSWORD || '123321',
    LOCALHOST: process.env.NODE_LOCALHOST || '127.0.0.1',
    PORT: process.env.NODE_PORT || 3000,
}