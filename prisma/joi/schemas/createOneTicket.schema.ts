import Joi from 'joi';
import { TicketCreateInputSchemaObject } from './objects'

export const TicketCreateSchema = Joi.object().keys({ data: Joi.object().keys(TicketCreateInputSchemaObject)  }).required()