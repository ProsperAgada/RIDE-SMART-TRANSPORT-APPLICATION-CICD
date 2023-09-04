"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookTicketInputSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.bookTicketInputSchema = joi_1.default.object({
    from: joi_1.default.string().min(3).required(),
    to: joi_1.default.string().min(3).required(),
    seat: joi_1.default.string().required(),
    amount: joi_1.default.string().required(),
});
//# sourceMappingURL=book.joi.js.map