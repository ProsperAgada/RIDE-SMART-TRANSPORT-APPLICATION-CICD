import Joi from 'joi';
import { TicketWhereInputSchemaObject } from './objects'

export const TicketDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(TicketWhereInputSchemaObject)  }).required()