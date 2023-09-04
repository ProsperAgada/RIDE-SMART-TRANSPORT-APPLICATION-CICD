"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTicketInputSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.updateTicketInputSchema = joi_1.default.object({
    tx_ref: joi_1.default.string().length(24).required(),
    transaction_id: joi_1.default.string().min(7).required(),
});
//# sourceMappingURL=update.joi.js.map