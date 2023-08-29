// @ts-nocheck
import Joi from 'joi';
import { NestedEnumStatusFilterSchemaObject } from './NestedEnumStatusFilter.schema'

export const EnumStatusFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumStatusFilterSchemaObject))
}