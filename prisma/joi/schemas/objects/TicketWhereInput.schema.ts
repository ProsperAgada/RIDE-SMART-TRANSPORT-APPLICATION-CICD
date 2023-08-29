// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { EnumStatusFilterSchemaObject } from './EnumStatusFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { EnumCurrencyFilterSchemaObject } from './EnumCurrencyFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const TicketWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#TicketWhereInput'),
Joi.array().items(Joi.link('#TicketWhereInput'))),
  OR: Joi.array().items(Joi.link('#TicketWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#TicketWhereInput'),
Joi.array().items(Joi.link('#TicketWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  slug: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  from: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  to: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  seat: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  price: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  amount: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  status: Joi.alternatives().try(Joi.object().keys(EnumStatusFilterSchemaObject)),
  date: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  isPaymentMade: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  currency: Joi.alternatives().try(Joi.object().keys(EnumCurrencyFilterSchemaObject)),
  trans_id: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  payment_type: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  callbackUrl: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  driverId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  driver: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject)),
  user: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject))
}