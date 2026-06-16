import express from 'express';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';
import morgan from 'morgan';

const app = express();

/** Middleware */
app.use(morgan('dev'));
app.use(express.json());

/** Routes */

/** Not Found Error */
app.use(notFound);

/** Error Handler */
app.use(errorHandler);

export default app;
