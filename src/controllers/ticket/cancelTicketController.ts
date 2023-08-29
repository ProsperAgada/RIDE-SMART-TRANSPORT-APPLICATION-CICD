import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const CancelTicketController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.body;
    const userId = req.user?.id;
    const role = req.user?.role;

    try {
      const ticket = await prisma.ticket.findFirst({
        where: { AND: [{ userId }, { id }] },
      });

      if (!ticket) {
        return errorResponse({
          message: "Ticket not found!",
          status: 404,
          res,
        });
      }

      const { status, isPaymentMade, userId: ticketUserId } = ticket;

      if (userId !== ticketUserId)
        return errorResponse({
          message: "Not allowed to perform this!",
          status: 403,
          res,
        });

      if (role !== "User")
        return errorResponse({
          message: "Only users can cancelled ticket!",
          status: 403,
          res,
        });

      if (
        status === "Cancelled" ||
        status === "Refunded" ||
        status === "Used"
      ) {
        return errorResponse({
          message: `Ticket has been ${status}`,
          status: 400,
          res,
        });
      }

      const updateTicket = await prisma.ticket.update({
        where: { id },
        data: { status: isPaymentMade ? "Refunded" : "Cancelled" },
      });

      return successResponse({
        message: `Ticket has been ${
          isPaymentMade ? "cancelled and money refunded" : "cancelled"
        } successfully`,
        data: updateTicket,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to cancelled ticket",
        status: 500,
        res,
      });
    }
  }
);

export default CancelTicketController;
