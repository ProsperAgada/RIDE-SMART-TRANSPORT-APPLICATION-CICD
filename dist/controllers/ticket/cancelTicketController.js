"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse_1 = require("../../utils/successResponse");
const errorResponse_1 = require("../../utils/errorResponse");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const server_1 = require("../../server");
const CancelTicketController = (0, catchAsync_1.default)(async (req, res) => {
    var _a, _b;
    const { id } = req.body;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    const role = (_b = req.user) === null || _b === void 0 ? void 0 : _b.role;
    try {
        const ticket = await server_1.prisma.ticket.findFirst({
            where: { AND: [{ userId }, { id }] },
        });
        if (!ticket) {
            return (0, errorResponse_1.errorResponse)({
                message: "Ticket not found!",
                status: 404,
                res,
            });
        }
        const { status, isPaymentMade, userId: ticketUserId } = ticket;
        if (userId !== ticketUserId)
            return (0, errorResponse_1.errorResponse)({
                message: "Not allowed to perform this!",
                status: 403,
                res,
            });
        if (role !== "User")
            return (0, errorResponse_1.errorResponse)({
                message: "Only users can cancelled ticket!",
                status: 403,
                res,
            });
        if (status === "Cancelled" ||
            status === "Refunded" ||
            status === "Used") {
            return (0, errorResponse_1.errorResponse)({
                message: `Ticket has been ${status}`,
                status: 400,
                res,
            });
        }
        const updateTicket = await server_1.prisma.ticket.update({
            where: { id },
            data: { status: isPaymentMade ? "Refunded" : "Cancelled" },
        });
        return (0, successResponse_1.successResponse)({
            message: `Ticket has been ${isPaymentMade ? "cancelled and money refunded" : "cancelled"} successfully`,
            data: updateTicket,
            res,
        });
    }
    catch (err) {
        return (0, errorResponse_1.errorResponse)({
            message: err.message || "Failed to cancelled ticket",
            status: 500,
            res,
        });
    }
});
exports.default = CancelTicketController;
//# sourceMappingURL=cancelTicketController.js.map