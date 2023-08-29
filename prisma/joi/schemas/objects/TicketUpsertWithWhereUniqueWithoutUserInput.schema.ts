// @ts-nocheck
import Joi from 'joi';
import { TicketWhereUniqueInputSchemaObject } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutUserInputSchemaObject } from './TicketUpdateWithoutUserInput.schema';
import { TicketUncheckedUpdateWithoutUserInputSchemaObject } from './TicketUncheckedUpdateWithoutUserInput.schema';
import { TicketCreateWithoutUserInputSchemaObject } from './TicketCreateWithoutUserInput.schema';
import { TicketUncheckedCreateWithoutUserInputSchemaObject } from './TicketUncheckedCreateWithoutUserInput.schema'

export const TicketUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(TicketWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(TicketUpdateWithoutUserInputSchemaObject),
Joi.object().keys(TicketUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(TicketCreateWithoutUserInputSchemaObject),
Joi.object().keys(TicketUncheckedCreateWithoutUserInputSchemaObject))
}