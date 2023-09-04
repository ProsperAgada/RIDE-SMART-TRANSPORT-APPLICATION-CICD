"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDriverInputSchema = exports.LoginStudentInputSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.LoginStudentInputSchema = joi_1.default.object({
    matricNo: joi_1.default.string().min(11).regex(/^([a-zA-Z]{3}\d{2}[a-zA-Z]{3}\d{3,})$/).required(),
    password: joi_1.default.string().required()
});
exports.LoginDriverInputSchema = joi_1.default.object({
    email: joi_1.default.string().min(5).email().required(),
    password: joi_1.default.string().required()
});
//# sourceMappingURL=login.joi.js.map