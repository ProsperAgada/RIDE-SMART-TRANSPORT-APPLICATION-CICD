// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TicketOrderByRelationAggregateInputSchemaObject } from './TicketOrderByRelationAggregateInput.schema'

export const UserOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  firstName: SortOrderSchema,
  lastName: SortOrderSchema,
  matricNo: SortOrderSchema,
  email: SortOrderSchema,
  password: SortOrderSchema,
  phone: SortOrderSchema,
  role: SortOrderSchema,
  createAt: SortOrderSchema,
  tickets: Joi.object().keys(TicketOrderByRelationAggregateInputSchemaObject),
  verify_tickets: Joi.object().keys(TicketOrderByRelationAggregateInputSchemaObject)
}