// @ts-nocheck
import Joi from 'joi';


export const NestedEnumStatusFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumStatusFilter'))
}