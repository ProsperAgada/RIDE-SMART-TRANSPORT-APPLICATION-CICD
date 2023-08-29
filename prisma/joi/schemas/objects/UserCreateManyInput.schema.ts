// @ts-nocheck
import Joi from 'joi';


export const UserCreateManyInputSchemaObject = {
    id: Joi.string(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  matricNo: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  createAt: Joi.date()
}