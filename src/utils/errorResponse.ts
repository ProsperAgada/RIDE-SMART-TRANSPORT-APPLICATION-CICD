import { ErrorType } from "../interfaces/error.interface";

export const errorResponse = (args: ErrorType) => {
  const { message, status, res, errors = [] } = args;
  return res.status(status).json({
    status: false,
    code: res.statusCode,
    message,
    errors,
  });
};
