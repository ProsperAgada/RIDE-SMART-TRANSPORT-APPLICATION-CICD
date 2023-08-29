// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const TicketOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  slug: SortOrderSchema,
  from: SortOrderSchema,
  to: SortOrderSchema,
  seat: SortOrderSchema,
  price: SortOrderSchema,
  amount: SortOrderSchema,
  status: SortOrderSchema,
  date: SortOrderSchema,
  isPaymentMade: SortOrderSchema,
  currency: SortOrderSchema,
  trans_id: SortOrderSchema,
  payment_type: SortOrderSchema,
  callbackUrl: SortOrderSchema,
  userId: SortOrderSchema,
  driverId: SortOrderSchema,
  driver: Joi.object().keys(UserOrderByWithRelationInputSchemaObject),
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}