import Joi from 'joi';

export const TicketScalarFieldEnumSchema = Joi.string().valid(...["id","slug","from","to","seat","price","amount","status","date","isPaymentMade","currency","trans_id","payment_type","callbackUrl","userId","driverId"])