import Joi from 'joi';
import { TicketUpdateManyMutationInputSchemaObject, TicketWhereInputSchemaObject } from './objects'

export const TicketUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(TicketUpdateManyMutationInputSchemaObject), where: Joi.object().keys(TicketWhereInputSchemaObject)  }).required()