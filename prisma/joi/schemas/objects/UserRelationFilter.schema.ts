// @ts-nocheck
import Joi from 'joi';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const UserRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(UserWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(UserWhereInputSchemaObject))
}