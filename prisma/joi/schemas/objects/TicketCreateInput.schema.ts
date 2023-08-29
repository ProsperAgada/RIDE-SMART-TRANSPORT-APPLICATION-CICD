// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutVerify_ticketsInputSchemaObject } from './UserCreateNestedOneWithoutVerify_ticketsInput.schema';
import { UserCreateNestedOneWithoutTicketsInputSchemaObject } from './UserCreateNestedOneWithoutTicketsInput.schema'

export const TicketCreateInputSchemaObject = {
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
  driver: Joi.object().keys(UserCreateNestedOneWithoutVerify_ticketsInputSchemaObject),
  user: Joi.object().keys(UserCreateNestedOneWithoutTicketsInputSchemaObject)
}