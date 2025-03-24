import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const app = express();
const localhost = process.env.NODE_LOCALHOST || '127.0.0.1';
const port = process.env.NODE_PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port http://${localhost+':'+port}`);
});