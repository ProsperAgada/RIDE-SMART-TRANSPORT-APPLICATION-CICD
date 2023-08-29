import GetSingleUserTicketController from "../controllers/ticket/getSingleUserTicketController";
import GetUserTicketController from "../controllers/ticket/getUserTicketController";
import CancelTicketController from "../controllers/ticket/cancelTicketController";
import VerifyTicketController from "../controllers/ticket/verifyTicketController";
import UpdateTicketController from "../controllers/ticket/updateTicketController";
import BookTicketController from "../controllers/ticket/bookTicketController";
import { authenticateToken } from "../middlewares/authenticateToken";
import { validateRequest } from "../middlewares/validateRequest";
import { verifyTicketInputSchema } from "../joi/verify.joi";
import { updateTicketInputSchema } from "../joi/update.joi";
import { bookTicketInputSchema } from "../joi/book.joi";
import { Router } from "express";

const ticketRouters = Router();

ticketRouters.use(authenticateToken);

ticketRouters.post(
  "/books",
  validateRequest(bookTicketInputSchema),
  BookTicketController
);

ticketRouters.get("/books", GetUserTicketController);

ticketRouters.get("/books/:id", GetSingleUserTicketController);

ticketRouters.post(
  "/books/verify",
  validateRequest(verifyTicketInputSchema),
  VerifyTicketController
);

ticketRouters.post(
  "/books/cancelled",
  validateRequest(verifyTicketInputSchema),
  CancelTicketController
);

ticketRouters.post(
  "/books/update",
  validateRequest(updateTicketInputSchema),
  UpdateTicketController
);

export default ticketRouters;
