import Joi from 'joi';
import { TicketUpdateInputSchemaObject, TicketWhereUniqueInputSchemaObject } from './objects'

export const TicketUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(TicketUpdateInputSchemaObject), where: Joi.object().keys(TicketWhereUniqueInputSchemaObject)  }).required()