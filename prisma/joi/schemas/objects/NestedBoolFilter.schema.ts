// @ts-nocheck
import Joi from 'joi';


export const NestedBoolFilterSchemaObject = {
    equals: Joi.boolean(),
  not: Joi.alternatives().try(Joi.boolean(),
Joi.link('#NestedBoolFilter'))
}