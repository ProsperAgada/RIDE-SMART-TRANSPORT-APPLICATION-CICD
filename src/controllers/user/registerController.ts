import { successResponse } from "../../utils/successResponse";
import { errorResponse } from "../../utils/errorResponse";
import { titleCase } from "../../utils/titleCase.util";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { prisma } from "../../server";
import bcrypt from "bcryptjs";

const RegisterController = catchAsync(async (req: Request, res: Response) => {
  const { firstName, lastName, matricNo, email, password, phone } = req.body;

  try {
    // Check if user with the same email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return errorResponse({
        message: "User already exists",
        status: 409,
        res,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        firstName: titleCase(firstName),
        lastName: titleCase(lastName),
        matricNo: `${matricNo}`.toUpperCase(),
        email,
        password: hashedPassword,
        phone,
      },
    });

    // Remove the password field for security reasons
    Reflect.deleteProperty(newUser, "password");

    return successResponse({
      message: "Signed up successfully!",
      data: newUser,
      status: 201,
      res,
    });
  } catch (err: any) {
    return errorResponse({
      message: err.message || "Failed to sign up user",
      status: 500,
      res,
    });
  }
});

export default RegisterController;
