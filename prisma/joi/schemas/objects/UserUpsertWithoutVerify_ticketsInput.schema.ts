// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutVerify_ticketsInputSchemaObject } from './UserUpdateWithoutVerify_ticketsInput.schema';
import { UserUncheckedUpdateWithoutVerify_ticketsInputSchemaObject } from './UserUncheckedUpdateWithoutVerify_ticketsInput.schema';
import { UserCreateWithoutVerify_ticketsInputSchemaObject } from './UserCreateWithoutVerify_ticketsInput.schema';
import { UserUncheckedCreateWithoutVerify_ticketsInputSchemaObject } from './UserUncheckedCreateWithoutVerify_ticketsInput.schema'

export const UserUpsertWithoutVerify_ticketsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutVerify_ticketsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutVerify_ticketsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutVerify_ticketsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutVerify_ticketsInputSchemaObject))
}