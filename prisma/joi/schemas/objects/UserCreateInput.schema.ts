// @ts-nocheck
import Joi from 'joi';
import { TicketCreateNestedManyWithoutUserInputSchemaObject } from './TicketCreateNestedManyWithoutUserInput.schema';
import { TicketCreateNestedManyWithoutDriverInputSchemaObject } from './TicketCreateNestedManyWithoutDriverInput.schema'

export const UserCreateInputSchemaObject = {
    id: Joi.string(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  matricNo: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  createAt: Joi.date(),
  tickets: Joi.object().keys(TicketCreateNestedManyWithoutUserInputSchemaObject),
  verify_tickets: Joi.object().keys(TicketCreateNestedManyWithoutDriverInputSchemaObject)
}