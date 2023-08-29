import Joi, { CustomHelpers } from "joi";

export const bookTicketInputSchema = Joi.object({
  from: Joi.string().min(3).required(),
  to: Joi.string().min(3).required(),
  seat: Joi.string().required(),
  amount: Joi.string().required(),
});
