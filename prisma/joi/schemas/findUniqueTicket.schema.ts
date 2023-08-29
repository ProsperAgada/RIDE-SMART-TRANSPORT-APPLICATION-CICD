import Joi from 'joi';
import { TicketWhereUniqueInputSchemaObject } from './objects'

export const TicketFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(TicketWhereUniqueInputSchemaObject) }).required()