// @ts-nocheck
import Joi from 'joi';
import { TicketCreateWithoutDriverInputSchemaObject } from './TicketCreateWithoutDriverInput.schema';
import { TicketUncheckedCreateWithoutDriverInputSchemaObject } from './TicketUncheckedCreateWithoutDriverInput.schema';
import { TicketCreateOrConnectWithoutDriverInputSchemaObject } from './TicketCreateOrConnectWithoutDriverInput.schema';
import { TicketCreateManyDriverInputEnvelopeSchemaObject } from './TicketCreateManyDriverInputEnvelope.schema';
import { TicketWhereUniqueInputSchemaObject } from './TicketWhereUniqueInput.schema'

export const TicketCreateNestedManyWithoutDriverInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(TicketCreateWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketCreateWithoutDriverInputSchemaObject)),
Joi.object().keys(TicketUncheckedCreateWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketUncheckedCreateWithoutDriverInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(TicketCreateOrConnectWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketCreateOrConnectWithoutDriverInputSchemaObject))),
  createMany: Joi.object().keys(TicketCreateManyDriverInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(TicketWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketWhereUniqueInputSchemaObject)))
}