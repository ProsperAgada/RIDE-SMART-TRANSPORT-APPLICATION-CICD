// @ts-nocheck
import Joi from 'joi';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumStatusFilterSchemaObject } from './NestedEnumStatusFilter.schema'

export const NestedEnumStatusWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumStatusWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumStatusFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumStatusFilterSchemaObject)
}