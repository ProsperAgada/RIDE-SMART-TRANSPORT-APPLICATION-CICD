// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutTicketsInputSchemaObject } from './UserCreateNestedOneWithoutTicketsInput.schema'

export const TicketCreateWithoutDriverInputSchemaObject = {
    id: Joi.string(),
  slug: Joi.string().required(),
  from: Joi.string().required(),
  to: Joi.string().required(),
  seat: Joi.number().required(),
  price: Joi.string(),
  amount: Joi.string().required(),
  date: Joi.date(),
  isPaymentMade: Joi.boolean(),
  trans_id: Joi.alternatives().try(Joi.string()),
  payment_type: Joi.alternatives().try(Joi.string()),
  callbackUrl: Joi.string(),
  user: Joi.object().keys(UserCreateNestedOneWithoutTicketsInputSchemaObject)
}