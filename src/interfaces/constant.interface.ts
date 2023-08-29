import { Secret } from "jsonwebtoken";

export interface IConstant {
  secretKey: string;
  expiresIn: string;
  refreshIn: string;
  FLWPaymentEndpoint: string;
  FLWSECKTest: string;
  FLWPUBKTest: string;
  logoLink: string;
}
