// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutTicketsInputSchemaObject } from './UserUpdateWithoutTicketsInput.schema';
import { UserUncheckedUpdateWithoutTicketsInputSchemaObject } from './UserUncheckedUpdateWithoutTicketsInput.schema';
import { UserCreateWithoutTicketsInputSchemaObject } from './UserCreateWithoutTicketsInput.schema';
import { UserUncheckedCreateWithoutTicketsInputSchemaObject } from './UserUncheckedCreateWithoutTicketsInput.schema'

export const UserUpsertWithoutTicketsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutTicketsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutTicketsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutTicketsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutTicketsInputSchemaObject))
}