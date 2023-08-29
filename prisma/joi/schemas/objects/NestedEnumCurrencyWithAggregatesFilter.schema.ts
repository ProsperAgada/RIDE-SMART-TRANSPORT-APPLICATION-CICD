// @ts-nocheck
import Joi from 'joi';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumCurrencyFilterSchemaObject } from './NestedEnumCurrencyFilter.schema'

export const NestedEnumCurrencyWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumCurrencyWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumCurrencyFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumCurrencyFilterSchemaObject)
}