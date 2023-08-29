// @ts-nocheck
import Joi from 'joi';
import { TicketScalarWhereInputSchemaObject } from './TicketScalarWhereInput.schema';
import { TicketUpdateManyMutationInputSchemaObject } from './TicketUpdateManyMutationInput.schema';
import { TicketUncheckedUpdateManyWithoutVerify_ticketsInputSchemaObject } from './TicketUncheckedUpdateManyWithoutVerify_ticketsInput.schema'

export const TicketUpdateManyWithWhereWithoutDriverInputSchemaObject = {
    where: Joi.object().keys(TicketScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(TicketUpdateManyMutationInputSchemaObject),
Joi.object().keys(TicketUncheckedUpdateManyWithoutVerify_ticketsInputSchemaObject))
}