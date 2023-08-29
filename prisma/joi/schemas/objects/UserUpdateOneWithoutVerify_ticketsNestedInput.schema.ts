// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutVerify_ticketsInputSchemaObject } from './UserCreateWithoutVerify_ticketsInput.schema';
import { UserUncheckedCreateWithoutVerify_ticketsInputSchemaObject } from './UserUncheckedCreateWithoutVerify_ticketsInput.schema';
import { UserCreateOrConnectWithoutVerify_ticketsInputSchemaObject } from './UserCreateOrConnectWithoutVerify_ticketsInput.schema';
import { UserUpsertWithoutVerify_ticketsInputSchemaObject } from './UserUpsertWithoutVerify_ticketsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutVerify_ticketsInputSchemaObject } from './UserUpdateWithoutVerify_ticketsInput.schema';
import { UserUncheckedUpdateWithoutVerify_ticketsInputSchemaObject } from './UserUncheckedUpdateWithoutVerify_ticketsInput.schema'

export const UserUpdateOneWithoutVerify_ticketsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutVerify_ticketsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutVerify_ticketsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutVerify_ticketsInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutVerify_ticketsInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutVerify_ticketsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutVerify_ticketsInputSchemaObject))
}