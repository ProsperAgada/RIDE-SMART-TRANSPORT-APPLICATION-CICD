// @ts-nocheck
import Joi from 'joi';
import { TicketCreateManyDriverInputSchemaObject } from './TicketCreateManyDriverInput.schema'

export const TicketCreateManyDriverInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(TicketCreateManyDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketCreateManyDriverInputSchemaObject)))
}