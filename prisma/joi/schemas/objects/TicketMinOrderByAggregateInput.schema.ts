// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const TicketMinOrderByAggregateInputSchemaObject = {
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
  driverId: SortOrderSchema
}