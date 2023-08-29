// @ts-nocheck
import Joi from 'joi';
import { TicketWhereUniqueInputSchemaObject } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutDriverInputSchemaObject } from './TicketUpdateWithoutDriverInput.schema';
import { TicketUncheckedUpdateWithoutDriverInputSchemaObject } from './TicketUncheckedUpdateWithoutDriverInput.schema';
import { TicketCreateWithoutDriverInputSchemaObject } from './TicketCreateWithoutDriverInput.schema';
import { TicketUncheckedCreateWithoutDriverInputSchemaObject } from './TicketUncheckedCreateWithoutDriverInput.schema'

export const TicketUpsertWithWhereUniqueWithoutDriverInputSchemaObject = {
    where: Joi.object().keys(TicketWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(TicketUpdateWithoutDriverInputSchemaObject),
Joi.object().keys(TicketUncheckedUpdateWithoutDriverInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(TicketCreateWithoutDriverInputSchemaObject),
Joi.object().keys(TicketUncheckedCreateWithoutDriverInputSchemaObject))
}