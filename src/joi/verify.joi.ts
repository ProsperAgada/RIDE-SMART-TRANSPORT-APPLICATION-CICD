import Joi from "joi";

export const verifyTicketInputSchema = Joi.object({
  id: Joi.string().length(24).required(),
});