import Joi from 'joi';
import { TicketWhereInputSchemaObject, TicketOrderByWithRelationInputSchemaObject, TicketWhereUniqueInputSchemaObject } from './objects';
import { TicketScalarFieldEnumSchema } from './enums'

export const TicketFindManySchema = Joi.object().keys({ where: Joi.object().keys(TicketWhereInputSchemaObject), orderBy: Joi.object().keys(TicketOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(TicketWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(TicketScalarFieldEnumSchema)  }).required()