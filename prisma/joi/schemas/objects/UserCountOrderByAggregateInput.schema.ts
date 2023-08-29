// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const UserCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  firstName: SortOrderSchema,
  lastName: SortOrderSchema,
  matricNo: SortOrderSchema,
  email: SortOrderSchema,
  password: SortOrderSchema,
  phone: SortOrderSchema,
  role: SortOrderSchema,
  createAt: SortOrderSchema
}