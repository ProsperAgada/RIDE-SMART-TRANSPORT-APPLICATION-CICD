import { Response } from "express";

export interface ErrorType {
  message: string;
  status: number;
  res: Response;
  errors?: Array<unknown>;
}
