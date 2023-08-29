import { successResponse } from "../../utils/successResponse";
import { errorResponse } from "../../utils/errorResponse";
import { constant } from "../../configs/constant.config";
import { envConfig } from "../../configs/env.config";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import axios from "axios";

const { FLWPaymentEndpoint, FLWSECKTest, logoLink } = constant;
const { url } = envConfig;

const MakePaymentController = catchAsync(
  async (req: Request, res: Response) => {
    try {
      const response = await axios.post(
        FLWPaymentEndpoint,
        {
          tx_ref: "64a56e0d102189f999227d03",
          amount: "300",
          currency: "NGN",
          redirect_url: `${url}api/v1/vendors/callback`,
          payment_options: "card,mobilemoney,ussd",
          customer: {
            email: "nelson@gmail.com",
            phonenumber: "07037839012",
            name: `Nelson Amali`,
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

      const { link } = response.data.data;

      return successResponse({
        message: "Ticket created successfully!",
        data: link,
        status: 201,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message:
          err?.response?.data?.message ||
          err?.response?.statusText ||
          "Error occured when generating payment link!",
        status: err?.response?.status || 500,
        res,
      });
    }
  }
);

export default MakePaymentController;
