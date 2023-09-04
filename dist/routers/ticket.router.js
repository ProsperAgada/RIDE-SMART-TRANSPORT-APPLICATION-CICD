"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getSingleUserTicketController_1 = __importDefault(require("../controllers/ticket/getSingleUserTicketController"));
const getUserTicketController_1 = __importDefault(require("../controllers/ticket/getUserTicketController"));
const cancelTicketController_1 = __importDefault(require("../controllers/ticket/cancelTicketController"));
const verifyTicketController_1 = __importDefault(require("../controllers/ticket/verifyTicketController"));
const updateTicketController_1 = __importDefault(require("../controllers/ticket/updateTicketController"));
const bookTicketController_1 = __importDefault(require("../controllers/ticket/bookTicketController"));
const authenticateToken_1 = require("../middlewares/authenticateToken");
const validateRequest_1 = require("../middlewares/validateRequest");
const verify_joi_1 = require("../joi/verify.joi");
const update_joi_1 = require("../joi/update.joi");
const book_joi_1 = require("../joi/book.joi");
const express_1 = require("express");
const ticketRouters = (0, express_1.Router)();
ticketRouters.use(authenticateToken_1.authenticateToken);
ticketRouters.post("/books", (0, validateRequest_1.validateRequest)(book_joi_1.bookTicketInputSchema), bookTicketController_1.default);
ticketRouters.get("/books", getUserTicketController_1.default);
ticketRouters.get("/books/:id", getSingleUserTicketController_1.default);
ticketRouters.post("/books/verify", (0, validateRequest_1.validateRequest)(verify_joi_1.verifyTicketInputSchema), verifyTicketController_1.default);
ticketRouters.post("/books/cancelled", (0, validateRequest_1.validateRequest)(verify_joi_1.verifyTicketInputSchema), cancelTicketController_1.default);
ticketRouters.post("/books/update", (0, validateRequest_1.validateRequest)(update_joi_1.updateTicketInputSchema), updateTicketController_1.default);
exports.default = ticketRouters;
//# sourceMappingURL=ticket.router.js.map