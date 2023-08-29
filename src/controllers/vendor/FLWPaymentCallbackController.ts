import { errorResponse } from "../../utils/errorResponse";
import { constant } from "../../configs/constant.config";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { prisma } from "../../server";
import axios from "axios";

const { FLWSECKTest } = constant;

const FLWPaymentCallbackController = catchAsync(
  async (req: Request, res: Response) => {
    const {
      status,
      tx_ref, //RideSmart Ticket Reference ID
      transaction_id, //flutterwave's transaction reference
    } = req.query;

    try {
      const ticket = await prisma.ticket.findFirst({
        where: { OR: [{ id: tx_ref as string }] },
      });

      if (!ticket)
        return errorResponse({
          message: `No Ticket was found for this id: ${tx_ref}`,
          status: 404,
          res,
        });

      //  url to verify flutterwave transaction to confirm payment before giving value
      const flwPaymentConfirmationUrl = `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`;

      if (status === "cancelled" || ticket.isPaymentMade) {
        return res.redirect(ticket.callbackUrl);
      }

      if (status === "successful" && tx_ref && transaction_id) {
        try {
          //verify the signature of the transaction before giving value
          const response = await axios.get(flwPaymentConfirmationUrl, {
            headers: {
              Authorization: `Bearer ${FLWSECKTest}`,
            },
          });

          const { status: responseStatus, data } = response.data;

          if (responseStatus === "success") {
            const updatedTicket = await prisma.ticket.update({
              where: { id: tx_ref as string },
              data: {
                trans_id: `${data.id}`,
                isPaymentMade: true,
                status: "Paid",
                payment_type: data.payment_type,
              },
            });

            return res.redirect(updatedTicket.callbackUrl);
          }
        } catch (err: any) {
          return errorResponse({
            message:
              err?.response?.data.message ||
              err?.response?.statusText ||
              "Error occured while verifying!",
            status: err?.response?.status || 400,
            res,
          });
        }
      }

      return errorResponse({
        message: "Invalid transaction!",
        status: 422,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: err?.message || "An error occurred!",
        status: 500,
        res,
      });
    }
  }
);

export default FLWPaymentCallbackController;
