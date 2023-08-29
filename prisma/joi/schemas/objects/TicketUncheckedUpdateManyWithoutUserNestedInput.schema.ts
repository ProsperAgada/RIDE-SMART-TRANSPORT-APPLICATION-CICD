// @ts-nocheck
import Joi from 'joi';
import { TicketCreateWithoutUserInputSchemaObject } from './TicketCreateWithoutUserInput.schema';
import { TicketUncheckedCreateWithoutUserInputSchemaObject } from './TicketUncheckedCreateWithoutUserInput.schema';
import { TicketCreateOrConnectWithoutUserInputSchemaObject } from './TicketCreateOrConnectWithoutUserInput.schema';
import { TicketUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './TicketUpsertWithWhereUniqueWithoutUserInput.schema';
import { TicketCreateManyUserInputEnvelopeSchemaObject } from './TicketCreateManyUserInputEnvelope.schema';
import { TicketWhereUniqueInputSchemaObject } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './TicketUpdateWithWhereUniqueWithoutUserInput.schema';
import { TicketUpdateManyWithWhereWithoutUserInputSchemaObject } from './TicketUpdateManyWithWhereWithoutUserInput.schema';
import { TicketScalarWhereInputSchemaObject } from './TicketScalarWhereInput.schema'

export const TicketUncheckedUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(TicketCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketCreateWithoutUserInputSchemaObject)),
Joi.object().keys(TicketUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(TicketCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(TicketUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(TicketCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(TicketWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(TicketWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(TicketWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(TicketWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(TicketUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(TicketUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(TicketScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(TicketScalarWhereInputSchemaObject)))
}