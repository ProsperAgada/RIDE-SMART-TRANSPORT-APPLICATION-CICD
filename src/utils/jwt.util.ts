import { constant } from "../configs/constant.config";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IJWTCustom } from "../interfaces/jwtcustom.interface";

const { secretKey, expiresIn, refreshIn } = constant;

export const signAccessJWToken = async(payload: JwtPayload): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, secretKey, { expiresIn: expiresIn }, (error, token) => {
      if (error) reject(error);
      resolve(token as string);
    });
  });
};

export const signRefreshJWToken = async (payload: JwtPayload): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(
      payload,
      secretKey,
      { expiresIn: refreshIn },
      (error, token) => {
        if (error) reject(error);
        resolve(token as string);
      }
    );
  });
};

export const verifyJWToken = async (token: string): Promise<IJWTCustom> => {
  return new Promise<IJWTCustom>((resolve, reject) => {
    jwt.verify(token, secretKey, (error, decode) => {
      if (error) reject(error);
      resolve(decode as IJWTCustom);
    });
  });
};
