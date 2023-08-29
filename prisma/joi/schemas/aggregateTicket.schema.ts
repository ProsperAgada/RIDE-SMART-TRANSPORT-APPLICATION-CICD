import Joi from 'joi';
import { TicketWhereInputSchemaObject, TicketOrderByWithRelationInputSchemaObject, TicketWhereUniqueInputSchemaObject } from './objects'

export const TicketAggregateSchema = Joi.object().keys({ where: Joi.object().keys(TicketWhereInputSchemaObject), orderBy: Joi.object().keys(TicketOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(TicketWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()