import Joi from 'joi';
import { TicketWhereInputSchemaObject, TicketOrderByWithAggregationInputSchemaObject, TicketScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { TicketScalarFieldEnumSchema } from './enums'

export const TicketGroupBySchema = Joi.object().keys({ where: Joi.object().keys(TicketWhereInputSchemaObject), orderBy: Joi.object().keys(TicketOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(TicketScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(TicketScalarFieldEnumSchema).required()  }).required()