import { IFLWPayment } from "../interfaces/flw.interface";
import { constant } from "../configs/constant.config";
import { envConfig } from "../configs/env.config";
import axios from "axios";
import { errorResponse } from "./errorResponse";

const { FLWPaymentEndpoint, FLWSECKTest, logoLink } = constant;
const { url } = envConfig;

export const FLWPayment = async (args: IFLWPayment) => {
  const { tx_ref, amount, currency, email, phone, firstName, lastName } = args;

  const response = await axios.post(
    FLWPaymentEndpoint,
    {
      tx_ref,
      amount,
      currency: currency || "NGN",
      redirect_url: `${url}api/v1/vendors/callback`,
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email,
        phonenumber: phone,
        name: `${firstName} ${lastName}`,
      },
      customizations: {
        title: "RideSmart Payments",
        description:
          "RideSmart provides a reliable and efficient solution that commute needs",
        logo: `${logoLink}`,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${FLWSECKTest}`,
      },
    }
  );

  return response;
};

export const FLWVerifyTransaction = async (transaction_id: string) => {
  const confirmationUrl = `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`;

  const response = await axios.get(confirmationUrl, {
    headers: {
      Authorization: `Bearer ${FLWSECKTest}`,
    },
  });

  return response.data;
};
