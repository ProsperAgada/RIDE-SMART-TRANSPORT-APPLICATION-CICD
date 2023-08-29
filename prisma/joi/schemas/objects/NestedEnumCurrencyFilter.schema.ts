// @ts-nocheck
import Joi from 'joi';


export const NestedEnumCurrencyFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumCurrencyFilter'))
}