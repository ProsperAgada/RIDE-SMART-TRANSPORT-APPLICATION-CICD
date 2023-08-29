import Joi from 'joi';
import { TicketWhereUniqueInputSchemaObject } from './objects'

export const TicketDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(TicketWhereUniqueInputSchemaObject)  }).required()