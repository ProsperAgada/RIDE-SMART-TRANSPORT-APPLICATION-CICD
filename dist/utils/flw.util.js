"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FLWVerifyTransaction = exports.FLWPayment = void 0;
const constant_config_1 = require("../configs/constant.config");
const env_config_1 = require("../configs/env.config");
const axios_1 = __importDefault(require("axios"));
const { FLWPaymentEndpoint, FLWSECKTest, logoLink } = constant_config_1.constant;
const { url } = env_config_1.envConfig;
const FLWPayment = async (args) => {
    const { tx_ref, amount, currency, email, phone, firstName, lastName } = args;
    const response = await axios_1.default.post(FLWPaymentEndpoint, {
        tx_ref,
        amount,
        currency: currency || "NGN",
        redirect_url: `${url}api/v1/vendors/callback`,
        payment_options: "card,mobilemoney,ussd",
        customer: {
            email,
            phonenumber: phone,
            name: `${firstName} ${lastName}`,
        },
        customizations: {
            title: "RideSmart Payments",
            description: "RideSmart provides a reliable and efficient solution that commute needs",
            logo: `${logoLink}`,
        },
    }, {
        headers: {
            Authorization: `Bearer ${FLWSECKTest}`,
        },
    });
    return response;
};
exports.FLWPayment = FLWPayment;
const FLWVerifyTransaction = async (transaction_id) => {
    const confirmationUrl = `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`;
    const response = await axios_1.default.get(confirmationUrl, {
        headers: {
            Authorization: `Bearer ${FLWSECKTest}`,
        },
    });
    return response.data;
};
exports.FLWVerifyTransaction = FLWVerifyTransaction;
//# sourceMappingURL=flw.util.js.map