// @ts-nocheck
import Joi from 'joi';
import { TicketWhereInputSchemaObject } from './TicketWhereInput.schema'

export const TicketListRelationFilterSchemaObject = {
    every: Joi.object().keys(TicketWhereInputSchemaObject),
  some: Joi.object().keys(TicketWhereInputSchemaObject),
  none: Joi.object().keys(TicketWhereInputSchemaObject)
}