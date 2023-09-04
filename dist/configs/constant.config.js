"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constant = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.constant = {
    expiresIn: "2h",
    refreshIn: "3d",
    secretKey: process.env.SECRET_KEY,
    FLWPaymentEndpoint: process.env.FLWPAYMENT_ENDPOINT,
    FLWSECKTest: process.env.FLWSECK_TEST,
    FLWPUBKTest: process.env.FLWPUBK_TEST,
    logoLink: process.env.UPLOADED_LOGO
};
//# sourceMappingURL=constant.config.js.map