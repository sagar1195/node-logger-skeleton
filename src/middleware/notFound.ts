import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../utils/error.util.js';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError(`Cannot ${req.method} ${req.originalUrl}`));
};
