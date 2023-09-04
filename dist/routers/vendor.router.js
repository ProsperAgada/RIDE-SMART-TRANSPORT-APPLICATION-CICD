"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FLWPaymentCallbackController_1 = __importDefault(require("../controllers/vendor/FLWPaymentCallbackController"));
const express_1 = require("express");
const MakePaymentController_1 = __importDefault(require("../controllers/vendor/MakePaymentController"));
const vendorRouters = (0, express_1.Router)();
vendorRouters.get("/callback", FLWPaymentCallbackController_1.default);
vendorRouters.get("/payment", MakePaymentController_1.default);
exports.default = vendorRouters;
//# sourceMappingURL=vendor.router.js.map