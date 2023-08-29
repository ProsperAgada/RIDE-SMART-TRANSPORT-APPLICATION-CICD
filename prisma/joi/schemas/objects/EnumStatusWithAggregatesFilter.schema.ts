// @ts-nocheck
import Joi from 'joi';
import { NestedEnumStatusWithAggregatesFilterSchemaObject } from './NestedEnumStatusWithAggregatesFilter.schema';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumStatusFilterSchemaObject } from './NestedEnumStatusFilter.schema'

export const EnumStatusWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumStatusWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumStatusFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumStatusFilterSchemaObject)
}