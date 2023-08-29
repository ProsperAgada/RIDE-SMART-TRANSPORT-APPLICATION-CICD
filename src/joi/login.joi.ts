import Joi from "joi";

export const LoginStudentInputSchema = Joi.object({
  matricNo: Joi.string().min(11).regex(/^([a-zA-Z]{3}\d{2}[a-zA-Z]{3}\d{3,})$/).required(),
  password: Joi.string().required()
});

export const LoginDriverInputSchema = Joi.object({
  email: Joi.string().min(5).email().required(),
  password: Joi.string().required()
});
