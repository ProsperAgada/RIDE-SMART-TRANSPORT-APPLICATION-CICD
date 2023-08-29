import { LoginDriverInputSchema, LoginStudentInputSchema } from "../joi/login.joi";
import LoginDriverController from "../controllers/user/loginDriverController";
import LoginUserController from "../controllers/user/loginUserController";
import RegisterController from "../controllers/user/registerController";
import { validateRequest } from "../middlewares/validateRequest";
import { RegisterInputSchema } from "../joi/register.joi";
import { Router } from "express";

const userRouters = Router();

userRouters.post(
  "/login",
  validateRequest(LoginStudentInputSchema),
  LoginUserController
);

userRouters.post(
  "/login/driver",
  validateRequest(LoginDriverInputSchema),
  LoginDriverController
);

userRouters.post(
  "/register",
  validateRequest(RegisterInputSchema),
  RegisterController
);

export default userRouters;
