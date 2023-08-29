// @ts-nocheck
import Joi from 'joi';
import { TicketCreateWithoutDriverInputSchemaObject } from './TicketCreateWithoutDriverInput.schema';
import { TicketUncheckedCreateWithoutDriverInputSchemaObject } from './TicketUncheckedCreateWithoutDriverInput.schema';
import { TicketCreateOrConnectWithoutDriverInputSchemaObject } from './TicketCreateOrConnectWithoutDriverInput.schema';
import { TicketUpsertWithWhereUniqueWithoutDriverInputSchemaObject } from './TicketUpsertWithWhereUniqueWithoutDriverInput.schema';
import { TicketCreateManyDriverInputEnvelopeSchemaObject } from './TicketCreateManyDriverInputEnvelope.schema';
import { TicketWhereUniqueInputSchemaObject } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithWhereUniqueWithoutDriverInputSchemaObject } from './TicketUpdateWithWhereUniqueWithoutDriverInput.schema';
import { TicketUpdateManyWithWhereWithoutDriverInputSchemaObject } from './TicketUpdateManyWithWhereWithoutDriverInput.schema';
import { TicketScalarWhereInputSchemaObject } from './TicketScalarWhereInput.schema'

export const TicketUpdateManyWithoutDriverNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(TicketCreateWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketCreateWithoutDriverInputSchemaObject)),
Joi.object().keys(TicketUncheckedCreateWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketUncheckedCreateWithoutDriverInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(TicketCreateOrConnectWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketCreateOrConnectWithoutDriverInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(TicketUpsertWithWhereUniqueWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketUpsertWithWhereUniqueWithoutDriverInputSchemaObject))),
  createMany: Joi.object().keys(TicketCreateManyDriverInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(TicketWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(TicketWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(TicketWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(TicketWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(TicketUpdateWithWhereUniqueWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketUpdateWithWhereUniqueWithoutDriverInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(TicketUpdateManyWithWhereWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketUpdateManyWithWhereWithoutDriverInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(TicketScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketScalarWhereInputSchemaObject)))
}