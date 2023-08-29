import Joi from 'joi';

export const StatusSchema = Joi.string().valid(...["Cancelled","Active","Refunded","Paid","Used"])