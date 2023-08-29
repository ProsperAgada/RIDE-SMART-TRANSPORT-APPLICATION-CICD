// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutVerify_ticketsInputSchemaObject } from './UserCreateNestedOneWithoutVerify_ticketsInput.schema'

export const TicketCreateWithoutUserInputSchemaObject = {
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
  driver: Joi.object().keys(UserCreateNestedOneWithoutVerify_ticketsInputSchemaObject)
}