// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutTicketsInputSchemaObject } from './UserCreateWithoutTicketsInput.schema';
import { UserUncheckedCreateWithoutTicketsInputSchemaObject } from './UserUncheckedCreateWithoutTicketsInput.schema';
import { UserCreateOrConnectWithoutTicketsInputSchemaObject } from './UserCreateOrConnectWithoutTicketsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutTicketsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutTicketsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutTicketsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutTicketsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}