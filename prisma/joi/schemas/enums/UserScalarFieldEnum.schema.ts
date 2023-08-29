import Joi from 'joi';

export const UserScalarFieldEnumSchema = Joi.string().valid(...["id","firstName","lastName","matricNo","email","password","phone","role","createAt"])