"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse_1 = require("../../utils/successResponse");
const errorResponse_1 = require("../../utils/errorResponse");
const titleCase_util_1 = require("../../utils/titleCase.util");
const slug_util_1 = require("../../utils/slug.util");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const server_1 = require("../../server");
const BookTicketController = (0, catchAsync_1.default)(async (req, res) => {
    const { from, to, seat, amount } = req.body;
    const user = req.user;
    const userId = user.id;
    const price = `${amount / seat}`;
    if (from.toLowerCase() === to.toLowerCase()) {
        return (0, errorResponse_1.errorResponse)({
            message: "'from' field must be different from the 'to' field!",
            status: 400,
            res,
        });
    }
    try {
        const user = await server_1.prisma.user.findFirst({
            where: { OR: [{ id: userId }] },
        });
        if (!user) {
            return (0, errorResponse_1.errorResponse)({ message: "User not found", status: 404, res });
        }
        const newTicket = await server_1.prisma.ticket.create({
            data: {
                slug: (0, slug_util_1.generateSlug)(),
                from: (0, titleCase_util_1.titleCase)(from),
                to: (0, titleCase_util_1.titleCase)(to),
                seat: +seat,
                price,
                amount,
                userId,
            },
        });
        return (0, successResponse_1.successResponse)({
            message: "Ticket created successfully!",
            data: newTicket,
            status: 201,
            res,
        });
    }
    catch (err) {
        return (0, errorResponse_1.errorResponse)({
            message: err.message || "Failed to create ticket",
            status: 500,
            res,
        });
    }
});
exports.default = BookTicketController;
//# sourceMappingURL=bookTicketController.js.map