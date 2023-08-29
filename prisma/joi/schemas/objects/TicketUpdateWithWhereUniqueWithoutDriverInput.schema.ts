// @ts-nocheck
import Joi from 'joi';
import { TicketWhereUniqueInputSchemaObject } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutDriverInputSchemaObject } from './TicketUpdateWithoutDriverInput.schema';
import { TicketUncheckedUpdateWithoutDriverInputSchemaObject } from './TicketUncheckedUpdateWithoutDriverInput.schema'

export const TicketUpdateWithWhereUniqueWithoutDriverInputSchemaObject = {
    where: Joi.object().keys(TicketWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(TicketUpdateWithoutDriverInputSchemaObject),
Joi.object().keys(TicketUncheckedUpdateWithoutDriverInputSchemaObject))
}