// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TicketCountOrderByAggregateInputSchemaObject } from './TicketCountOrderByAggregateInput.schema';
import { TicketAvgOrderByAggregateInputSchemaObject } from './TicketAvgOrderByAggregateInput.schema';
import { TicketMaxOrderByAggregateInputSchemaObject } from './TicketMaxOrderByAggregateInput.schema';
import { TicketMinOrderByAggregateInputSchemaObject } from './TicketMinOrderByAggregateInput.schema';
import { TicketSumOrderByAggregateInputSchemaObject } from './TicketSumOrderByAggregateInput.schema'

export const TicketOrderByWithAggregationInputSchemaObject = {
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
  _count: Joi.object().keys(TicketCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(TicketAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(TicketMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(TicketMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(TicketSumOrderByAggregateInputSchemaObject)
}