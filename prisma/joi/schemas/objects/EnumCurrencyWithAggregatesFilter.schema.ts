// @ts-nocheck
import Joi from 'joi';
import { NestedEnumCurrencyWithAggregatesFilterSchemaObject } from './NestedEnumCurrencyWithAggregatesFilter.schema';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumCurrencyFilterSchemaObject } from './NestedEnumCurrencyFilter.schema'

export const EnumCurrencyWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumCurrencyWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumCurrencyFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumCurrencyFilterSchemaObject)
}