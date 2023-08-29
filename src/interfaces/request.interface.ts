import { Request as ExpressRequest } from "express";
import { IJWTCustom } from "./jwtcustom.interface";

export interface Request extends ExpressRequest {
  user?: IJWTCustom;
}
