// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutVerify_ticketsInputSchemaObject } from './UserCreateWithoutVerify_ticketsInput.schema';
import { UserUncheckedCreateWithoutVerify_ticketsInputSchemaObject } from './UserUncheckedCreateWithoutVerify_ticketsInput.schema';
import { UserCreateOrConnectWithoutVerify_ticketsInputSchemaObject } from './UserCreateOrConnectWithoutVerify_ticketsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutVerify_ticketsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutVerify_ticketsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutVerify_ticketsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutVerify_ticketsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}