import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetUserTicketController = catchAsync(
  async (req: Request, res: Response) => {
    let { page, limit } = req.query;
    const userId = req.user?.id;
    const driverId = req.user?.id;
    const role = req.user?.role;
    const limitNum = +(limit as string) || 10;
    const pgNum = +(page as string) || 1;
    const offset = (pgNum - 1) * limitNum;

    const totalCount =
      role === "User"
        ? await prisma.ticket.count({
            where: { userId },
          })
        : await prisma.ticket.count({
            where: { OR: [{ driverId }] },
          });

    const totalPages = Math.ceil(totalCount / limitNum);

    try {
      const tickets =
        role === "User"
          ? await prisma.ticket.findMany({
              where: { userId },
              orderBy: { date: "desc" },
              take: limitNum,
              skip: offset,
              include: {
                user: true,
              },
            })
          : await prisma.ticket.findMany({
              where: { OR: [{ driverId }] },
              orderBy: { date: "desc" },
              take: limitNum,
              skip: offset,
              include: {
                user: true,
              },
            });

      return successResponse({
        message: "Fetch successfully",
        data: tickets,
        res,
        other: {
          totalCount,
          totalPages
        }
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "Failed to get tickets",
        status: 500,
        res,
      });
    }
  }
);

export default GetUserTicketController;
