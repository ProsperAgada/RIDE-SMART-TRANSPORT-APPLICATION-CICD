// @ts-nocheck
import Joi from 'joi';
import { NestedEnumCurrencyFilterSchemaObject } from './NestedEnumCurrencyFilter.schema'

export const EnumCurrencyFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumCurrencyFilterSchemaObject))
}