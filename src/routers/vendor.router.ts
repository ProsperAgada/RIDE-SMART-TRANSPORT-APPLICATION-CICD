import FLWPaymentCallbackController from "../controllers/vendor/FLWPaymentCallbackController";
import { Router } from "express";
import MakePaymentController from "../controllers/vendor/MakePaymentController";

const vendorRouters = Router();

vendorRouters.get(
  "/callback",
  FLWPaymentCallbackController
);

vendorRouters.get(
  "/payment",
  MakePaymentController
);

export default vendorRouters;