// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { EnumRoleFilterSchemaObject } from './EnumRoleFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { TicketListRelationFilterSchemaObject } from './TicketListRelationFilter.schema'

export const UserWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#UserWhereInput'),
Joi.array().items(Joi.link('#UserWhereInput'))),
  OR: Joi.array().items(Joi.link('#UserWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#UserWhereInput'),
Joi.array().items(Joi.link('#UserWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  firstName: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  lastName: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  matricNo: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  email: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  password: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  phone: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  role: Joi.alternatives().try(Joi.object().keys(EnumRoleFilterSchemaObject)),
  createAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  tickets: Joi.object().keys(TicketListRelationFilterSchemaObject),
  verify_tickets: Joi.object().keys(TicketListRelationFilterSchemaObject)
}