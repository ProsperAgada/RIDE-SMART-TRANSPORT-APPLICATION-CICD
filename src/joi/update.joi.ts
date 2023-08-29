import Joi from "joi";

export const updateTicketInputSchema = Joi.object({
  tx_ref: Joi.string().length(24).required(),
  transaction_id: Joi.string().min(7).required(),
});
