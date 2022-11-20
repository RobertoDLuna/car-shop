import { NextFunction, Request, Response } from 'express';
import CustomizedError from '../Utils/CustomizedError';

class ErrorHandler {
  public static handle(
    error: CustomizedError,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    if (error.status) return res.status(error.status).json({ message: error.message });
    return res.sendStatus(500);
  }
}

export default ErrorHandler;