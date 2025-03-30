import express from 'express';
import AsyncExitHook from 'async-exit-hook';
import { CONNECT_DB, CLOSE_DB, GET_DATABASE } from './config/mongodb.js';
import { env } from '~/config/environment.js';
import { APIv1 } from './routes/v1/index.js';
import { StatusCodes } from 'http-status-codes';
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware.js';

const app = express();
const localhost = env.LOCALHOST || '127.0.0.1';
const port = env.PORT || 3000;

const START_SERVER = () => {
  // Enable JSON parsing data request body
  app.use(express.json());
  
  // use APIsv1 
  app.use('/v1', APIv1);

// Error handling middleware handling all errors
app.use(errorHandlingMiddleware);

  // app.get('/', async (req, res) => {
  //   // console.log(await GET_DATABASE().listCollections().toArray());
  //   res.send('Hello World!');
  // });
  app.listen(port, () => {
    console.log(`3. Server is running on port http://${localhost + ':' + port}`);
  });
  AsyncExitHook(() => {
    console.log('4. waiting clean up');
    // signal();
    CLOSE_DB();
    console.log('5. Clean up done');
  });
}

// Connected to DB succession is start server on BE
// syntax: IIFE (Immediately Invoked Function Expression) => Anonymous function
(async () => {
  try{
    console.log('1. Waiting Connect to MongoDB...');
    await CONNECT_DB();
    
    console.log('2. Connected to MongoDB');
    START_SERVER();
  }catch(e){
    console.log('Error connecting to MongoDB:', e);
    process.exit(0);
  }
})();

// CONNECT_DB()
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .then(()=>{
//     START_SERVER();
//   })
//   .catch((error) => {
//     console.log('Error connecting to MongoDB:', error);
//     process.exit(0);
//   });