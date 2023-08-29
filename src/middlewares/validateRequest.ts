import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils/errorResponse";
import Joi from "joi";

export const validateRequest = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return errorResponse({
        message: error.details[0].message,
        status: 400,
        res,
      });
    }
    next();
  };
};
