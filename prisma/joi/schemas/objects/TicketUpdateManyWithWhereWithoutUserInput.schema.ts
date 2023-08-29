// @ts-nocheck
import Joi from 'joi';
import { TicketScalarWhereInputSchemaObject } from './TicketScalarWhereInput.schema';
import { TicketUpdateManyMutationInputSchemaObject } from './TicketUpdateManyMutationInput.schema';
import { TicketUncheckedUpdateManyWithoutTicketsInputSchemaObject } from './TicketUncheckedUpdateManyWithoutTicketsInput.schema'

export const TicketUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(TicketScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(TicketUpdateManyMutationInputSchemaObject),
Joi.object().keys(TicketUncheckedUpdateManyWithoutTicketsInputSchemaObject))
}