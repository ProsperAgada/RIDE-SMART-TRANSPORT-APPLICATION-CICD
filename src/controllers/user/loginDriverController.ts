import { signAccessJWToken, signRefreshJWToken } from "../../utils/jwt.util";
import { successResponse } from "../../utils/successResponse";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { prisma } from "../../server";
import bcrypt from "bcryptjs";

const LoginDriverController = catchAsync(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      // Check if the user exists
      const user = await prisma.user.findFirst({ where: { OR: [{ email }] } });

      if (!user) {
        return errorResponse({
          message: "User doesn't exists!",
          status: 404,
          res,
        });
      }

      // Verify the password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return errorResponse({
          message: "Invalid password!",
          status: 400,
          res,
        });
      }

      if (user.role !== "Driver") {
        return errorResponse({
          message: "Can't login, not a driver!",
          status: 403,
          res,
        });
      }

      // Generate Access and Refreshed Token
      const accessToken = await signAccessJWToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      const refreshToken = await signRefreshJWToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      return successResponse({
        message: "Login successfully",
        data: {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          matricNo: user.matricNo,
          phone: user.phone,
          role: user.role,
          accessToken,
          refreshToken,
        },
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: err.message || "An error occurred",
        status: 500,
        res,
      });
    }
  }
);

export default LoginDriverController;
