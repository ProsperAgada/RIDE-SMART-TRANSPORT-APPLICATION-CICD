import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetSingleUserTicketController = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;
    const { id } = req.params;

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

      return successResponse({
        message: "Fetch successfully!",
        data: ticket,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to get ticket!",
        status: 500,
        res,
      });
    }
  }
);

export default GetSingleUserTicketController;
