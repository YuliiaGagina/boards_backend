import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi"; 
import HttpError from '../helpers/HttpError';

const validateBody = (schema: ObjectSchema) => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(HttpError(400, error.message as string));
    
    }
   
    next();
  };

  return func;
};

module.exports = validateBody;
