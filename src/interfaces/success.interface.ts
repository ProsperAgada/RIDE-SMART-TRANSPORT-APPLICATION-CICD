import { Response } from "express";

export interface SuccessType {
  data: any;
  message: string;
  status?: number;
  res: Response;
  other?: any;
}