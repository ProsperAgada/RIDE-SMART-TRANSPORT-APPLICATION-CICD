// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutVerify_ticketsInputSchemaObject } from './UserCreateWithoutVerify_ticketsInput.schema';
import { UserUncheckedCreateWithoutVerify_ticketsInputSchemaObject } from './UserUncheckedCreateWithoutVerify_ticketsInput.schema'

export const UserCreateOrConnectWithoutVerify_ticketsInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutVerify_ticketsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutVerify_ticketsInputSchemaObject))
}