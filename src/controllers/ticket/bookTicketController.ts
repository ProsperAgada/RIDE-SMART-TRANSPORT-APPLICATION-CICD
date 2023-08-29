import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import { titleCase } from "../../utils/titleCase.util";
import { generateSlug } from "../../utils/slug.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const BookTicketController = catchAsync(async (req: Request, res: Response) => {
  const { from, to, seat, amount } = req.body;
  const user = req.user as IJWTCustom;
  const userId = user.id;
  const price = `${amount / seat}`;

  if (from.toLowerCase() === to.toLowerCase()) {
    return errorResponse({
      message: "'from' field must be different from the 'to' field!",
      status: 400,
      res,
    });
  }

  try {
    const user = await prisma.user.findFirst({
      where: { OR: [{ id: userId }] },
    });

    if (!user) {
      return errorResponse({ message: "User not found", status: 404, res });
    }

    const newTicket = await prisma.ticket.create({
      data: {
        slug: generateSlug(),
        from: titleCase(from),
        to: titleCase(to),
        seat: +seat,
        price,
        amount,
        userId,
      },
    });

    return successResponse({
      message: "Ticket created successfully!",
      data: newTicket,
      status: 201,
      res,
    });
  } catch (err: any) {
    return errorResponse({
      message: err.message || "Failed to create ticket",
      status: 500,
      res,
    });
  }
});

export default BookTicketController;
