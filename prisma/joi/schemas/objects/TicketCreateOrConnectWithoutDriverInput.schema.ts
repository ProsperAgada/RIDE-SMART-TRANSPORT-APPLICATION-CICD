// @ts-nocheck
import Joi from 'joi';
import { TicketWhereUniqueInputSchemaObject } from './TicketWhereUniqueInput.schema';
import { TicketCreateWithoutDriverInputSchemaObject } from './TicketCreateWithoutDriverInput.schema';
import { TicketUncheckedCreateWithoutDriverInputSchemaObject } from './TicketUncheckedCreateWithoutDriverInput.schema'

export const TicketCreateOrConnectWithoutDriverInputSchemaObject = {
    where: Joi.object().keys(TicketWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(TicketCreateWithoutDriverInputSchemaObject),
Joi.object().keys(TicketUncheckedCreateWithoutDriverInputSchemaObject))
}