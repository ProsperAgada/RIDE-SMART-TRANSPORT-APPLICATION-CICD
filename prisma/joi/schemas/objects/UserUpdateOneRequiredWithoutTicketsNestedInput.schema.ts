// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutTicketsInputSchemaObject } from './UserCreateWithoutTicketsInput.schema';
import { UserUncheckedCreateWithoutTicketsInputSchemaObject } from './UserUncheckedCreateWithoutTicketsInput.schema';
import { UserCreateOrConnectWithoutTicketsInputSchemaObject } from './UserCreateOrConnectWithoutTicketsInput.schema';
import { UserUpsertWithoutTicketsInputSchemaObject } from './UserUpsertWithoutTicketsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutTicketsInputSchemaObject } from './UserUpdateWithoutTicketsInput.schema';
import { UserUncheckedUpdateWithoutTicketsInputSchemaObject } from './UserUncheckedUpdateWithoutTicketsInput.schema'

export const UserUpdateOneRequiredWithoutTicketsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutTicketsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutTicketsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutTicketsInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutTicketsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutTicketsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutTicketsInputSchemaObject))
}