// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTicketsInputSchemaObject } from './UserCreateWithoutTicketsInput.schema';
import { UserUncheckedCreateWithoutTicketsInputSchemaObject } from './UserUncheckedCreateWithoutTicketsInput.schema'

export const UserCreateOrConnectWithoutTicketsInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutTicketsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutTicketsInputSchemaObject))
}