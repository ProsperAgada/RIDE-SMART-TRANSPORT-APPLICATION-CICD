import { IConstant } from "../interfaces/constant.interface";
import { config } from "dotenv";

config();

export const constant: IConstant = {
  expiresIn: "2h",
  refreshIn: "3d",
  secretKey: process.env.SECRET_KEY as string,
  FLWPaymentEndpoint: process.env.FLWPAYMENT_ENDPOINT as string,
  FLWSECKTest: process.env.FLWSECK_TEST as string,
  FLWPUBKTest: process.env.FLWPUBK_TEST as string,
  logoLink: process.env.UPLOADED_LOGO as string
};
