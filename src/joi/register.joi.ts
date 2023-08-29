import Joi from "joi";

export const RegisterInputSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  matricNo: Joi.string()
    .min(11)
    .regex(/^([a-zA-Z]{3}\d{2}[a-zA-Z]{3}\d{3,})$/)
    .required(),
  email: Joi.string().email().min(5).required(),
  password: Joi.string().required(),
  phone: Joi.string().min(10).required(),
});
