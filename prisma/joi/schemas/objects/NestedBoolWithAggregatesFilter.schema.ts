// @ts-nocheck
import Joi from 'joi';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedBoolFilterSchemaObject } from './NestedBoolFilter.schema'

export const NestedBoolWithAggregatesFilterSchemaObject = {
    equals: Joi.boolean(),
  not: Joi.alternatives().try(Joi.boolean(),
Joi.link('#NestedBoolWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedBoolFilterSchemaObject),
  _max: Joi.object().keys(NestedBoolFilterSchemaObject)
}