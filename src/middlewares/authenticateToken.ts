import { Request } from "../interfaces/request.interface";
import { errorResponse } from "../utils/errorResponse";
import { verifyJWToken } from "../utils/jwt.util";
import { Response, NextFunction } from "express";

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return errorResponse({
      message: "Token not provided",
      status: 401,
      res,
    });
  }

  let user = { id: "", email: "", role: "" };

  try {
    user = await verifyJWToken(token);
  } catch (err: any) {
    return errorResponse({
      message: err.message || "Invalid Token",
      status: 403,
      res,
    });
  }

  req.user = user;
  next();
};
