import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { FLWVerifyTransaction } from "../../utils/flw.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const VerifyTicketController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.body;
    const role = req.user?.role;
    const driverId = req.user?.id;

    try {
      const ticket = await prisma.ticket.findFirst({
        where: { OR: [{ id }] },
      });

      if (!ticket) {
        return errorResponse({
          message: "Ticket not found!",
          status: 404,
          res,
        });
      }

      if (role !== "Driver") {
        return errorResponse({
          message: "Only drivers can verify ticket(s)!",
          status: 409,
          res,
        });
      }

      const { isPaymentMade, status, trans_id, id: ticketId } = ticket;

      try {
        if (trans_id) {
          const data = await FLWVerifyTransaction(trans_id);
          if (data.status !== "success") {
            return errorResponse({
              message: "No transaction was found for this id!",
              status: 400,
              res,
            });
          }
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

      if (status === "Used" || status === "Refunded") {
        return errorResponse({
          message: `Ticket has been ${status} already!`,
          status: 400,
          res,
        });
      }

      if ((!isPaymentMade || !trans_id) && status !== "Paid") {
        return errorResponse({
          message: `Payment has not been made for this ticket and  ${
            status !== "Active" ? `has been ${status}` : "still active"
          }!`,
          status: 400,
          res,
        });
      }

      if (ticket.driverId && ticket.driverId !== driverId) {
        return successResponse({
          message: "Ticket has been verified successfully by another driver!",
          data: {},
          res,
        });
      }

      const driverTicket = await prisma.ticket.findFirst({
        where: { AND: [{ id: ticketId }, { driverId }] },
      });

      let updatedTicket = {};

      if (!driverTicket) {
        updatedTicket = await prisma.ticket.update({
          where: { id: ticketId },
          data: {
            driverId,
            status: "Used",
          },
        });
      }

      return successResponse({
        message: "Ticket has been verified successfully!",
        data: updatedTicket,
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

export default VerifyTicketController;
