import Joi from 'joi';

export const CurrencySchema = Joi.string().valid(...["NGN","GBP","USD","EUR","GHS"])