// @ts-nocheck
import Joi from 'joi';
import { TicketCreateWithoutUserInputSchemaObject } from './TicketCreateWithoutUserInput.schema';
import { TicketUncheckedCreateWithoutUserInputSchemaObject } from './TicketUncheckedCreateWithoutUserInput.schema';
import { TicketCreateOrConnectWithoutUserInputSchemaObject } from './TicketCreateOrConnectWithoutUserInput.schema';
import { TicketCreateManyUserInputEnvelopeSchemaObject } from './TicketCreateManyUserInputEnvelope.schema';
import { TicketWhereUniqueInputSchemaObject } from './TicketWhereUniqueInput.schema'

export const TicketCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(TicketCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketCreateWithoutUserInputSchemaObject)),
Joi.object().keys(TicketUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(TicketCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(TicketCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(TicketWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketWhereUniqueInputSchemaObject)))
}