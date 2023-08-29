// @ts-nocheck
import Joi from 'joi';
import { TicketWhereUniqueInputSchemaObject } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutUserInputSchemaObject } from './TicketUpdateWithoutUserInput.schema';
import { TicketUncheckedUpdateWithoutUserInputSchemaObject } from './TicketUncheckedUpdateWithoutUserInput.schema'

export const TicketUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(TicketWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(TicketUpdateWithoutUserInputSchemaObject),
Joi.object().keys(TicketUncheckedUpdateWithoutUserInputSchemaObject))
}