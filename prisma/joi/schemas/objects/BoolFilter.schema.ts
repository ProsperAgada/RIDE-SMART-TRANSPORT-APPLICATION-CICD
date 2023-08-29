// @ts-nocheck
import Joi from 'joi';
import { NestedBoolFilterSchemaObject } from './NestedBoolFilter.schema'

export const BoolFilterSchemaObject = {
    equals: Joi.boolean(),
  not: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(NestedBoolFilterSchemaObject))
}