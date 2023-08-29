// @ts-nocheck
import Joi from 'joi';
import { NestedBoolWithAggregatesFilterSchemaObject } from './NestedBoolWithAggregatesFilter.schema';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedBoolFilterSchemaObject } from './NestedBoolFilter.schema'

export const BoolWithAggregatesFilterSchemaObject = {
    equals: Joi.boolean(),
  not: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(NestedBoolWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedBoolFilterSchemaObject),
  _max: Joi.object().keys(NestedBoolFilterSchemaObject)
}