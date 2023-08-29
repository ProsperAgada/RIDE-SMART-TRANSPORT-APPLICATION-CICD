import Joi from 'joi';
import { TicketWhereUniqueInputSchemaObject, TicketCreateInputSchemaObject, TicketUpdateInputSchemaObject } from './objects'

export const TicketUpsertSchema = Joi.object().keys({ where: Joi.object().keys(TicketWhereUniqueInputSchemaObject), data: Joi.object().keys(TicketCreateInputSchemaObject), update: Joi.object().keys(TicketUpdateInputSchemaObject)  }).required()