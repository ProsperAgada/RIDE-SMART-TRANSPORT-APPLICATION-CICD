// @ts-nocheck
import Joi from 'joi';
import { TicketWhereUniqueInputSchemaObject } from './TicketWhereUniqueInput.schema';
import { TicketCreateWithoutUserInputSchemaObject } from './TicketCreateWithoutUserInput.schema';
import { TicketUncheckedCreateWithoutUserInputSchemaObject } from './TicketUncheckedCreateWithoutUserInput.schema'

export const TicketCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(TicketWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(TicketCreateWithoutUserInputSchemaObject),
Joi.object().keys(TicketUncheckedCreateWithoutUserInputSchemaObject))
}