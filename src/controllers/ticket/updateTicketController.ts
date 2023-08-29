import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { FLWVerifyTransaction } from "../../utils/flw.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const UpdateTicketController = catchAsync(
  async (req: Request, res: Response) => {
    const { tx_ref, transaction_id } = req.body;
    const userId = req.user?.id;
    const role = req.user?.role;
    let payment_type = "";
    let txRef = "";
    let transID = "";

    try {
      const ticket = await prisma.ticket.findFirst({
        where: { AND: [{ userId }, { id: tx_ref }] },
      });

      if (!ticket) {
        return errorResponse({
          message: "Ticket not found!",
          status: 404,
          res,
        });
      }

      try {
        const resp = await FLWVerifyTransaction(transaction_id);
        // console.log("DATA => ", resp);
        payment_type = resp.data.payment_type;
        txRef = resp.data.tx_ref;
        transID = resp.data.id;

        if (resp.status !== "success") {
          return errorResponse({
            message: "No transaction was found for this id!",
            status: 400,
            res,
          });
        }
      } catch (err: any) {
        // console.log(err)
        return errorResponse({
          message:
            err?.response?.data.message ||
            err?.response?.statusText ||
            "Error occured while verifying!",
          status: err?.response?.status || 400,
          res,
        });
      }

      const { status, userId: ticketUserId, isPaymentMade } = ticket;

      if (userId !== ticketUserId)
        return errorResponse({
          message: "Not allowed to perform this!",
          status: 403,
          res,
        });

      if (role !== "User")
        return errorResponse({
          message: "Only users can update ticket!",
          status: 403,
          res,
        });

      if (status !== "Active") {
        return errorResponse({
          message: `Ticket has ${
            status === "Cancelled" || status === "Paid"
              ? `been ${status}!`
              : "expired!"
          }`,
          status: 400,
          res,
        });
      }

      if (isPaymentMade) {
        return errorResponse({
          message: "Payment has been made for this ticket already!",
          status: 400,
          res,
        });
      }

      const updateTicket = await prisma.ticket.update({
        where: { id: txRef },
        data: {
          trans_id: `${transID}`,
          isPaymentMade: true,
          status: "Paid",
          payment_type,
        },
      });

      return successResponse({
        message: "Payment made successfully!",
        data: updateTicket,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to verify ticket!",
        status: 500,
        res,
      });
    }
  }
);

export default UpdateTicketController;
