"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterInputSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.RegisterInputSchema = joi_1.default.object({
    firstName: joi_1.default.string().min(3).required(),
    lastName: joi_1.default.string().min(3).required(),
    matricNo: joi_1.default.string()
        .min(11)
        .regex(/^([a-zA-Z]{3}\d{2}[a-zA-Z]{3}\d{3,})$/)
        .required(),
    email: joi_1.default.string().email().min(5).required(),
    password: joi_1.default.string().required(),
    phone: joi_1.default.string().min(10).required(),
});
//# sourceMappingURL=register.joi.js.map