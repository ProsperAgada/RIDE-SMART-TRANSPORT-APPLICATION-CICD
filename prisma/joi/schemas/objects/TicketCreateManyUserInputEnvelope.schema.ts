// @ts-nocheck
import Joi from 'joi';
import { TicketCreateManyUserInputSchemaObject } from './TicketCreateManyUserInput.schema'

export const TicketCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(TicketCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketCreateManyUserInputSchemaObject)))
}