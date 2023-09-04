"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse_1 = require("../../utils/successResponse");
const flw_util_1 = require("../../utils/flw.util");
const errorResponse_1 = require("../../utils/errorResponse");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const server_1 = require("../../server");
const VerifyTicketController = (0, catchAsync_1.default)(async (req, res) => {
    var _a, _b, _c, _d, _e;
    const { id } = req.body;
    const role = (_a = req.user) === null || _a === void 0 ? void 0 : _a.role;
    const driverId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.id;
    try {
        const ticket = await server_1.prisma.ticket.findFirst({
            where: { OR: [{ id }] },
        });
        if (!ticket) {
            return (0, errorResponse_1.errorResponse)({
                message: "Ticket not found!",
                status: 404,
                res,
            });
        }
        if (role !== "Driver") {
            return (0, errorResponse_1.errorResponse)({
                message: "Only drivers can verify ticket(s)!",
                status: 409,
                res,
            });
        }
        const { isPaymentMade, status, trans_id, id: ticketId } = ticket;
        try {
            if (trans_id) {
                const data = await (0, flw_util_1.FLWVerifyTransaction)(trans_id);
                if (data.status !== "success") {
                    return (0, errorResponse_1.errorResponse)({
                        message: "No transaction was found for this id!",
                        status: 400,
                        res,
                    });
                }
            }
        }
        catch (err) {
            return (0, errorResponse_1.errorResponse)({
                message: ((_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.data.message) ||
                    ((_d = err === null || err === void 0 ? void 0 : err.response) === null || _d === void 0 ? void 0 : _d.statusText) ||
                    "Error occured while verifying!",
                status: ((_e = err === null || err === void 0 ? void 0 : err.response) === null || _e === void 0 ? void 0 : _e.status) || 400,
                res,
            });
        }
        if (status === "Used" || status === "Refunded") {
            return (0, errorResponse_1.errorResponse)({
                message: `Ticket has been ${status} already!`,
                status: 400,
                res,
            });
        }
        if ((!isPaymentMade || !trans_id) && status !== "Paid") {
            return (0, errorResponse_1.errorResponse)({
                message: `Payment has not been made for this ticket and  ${status !== "Active" ? `has been ${status}` : "still active"}!`,
                status: 400,
                res,
            });
        }
        if (ticket.driverId && ticket.driverId !== driverId) {
            return (0, successResponse_1.successResponse)({
                message: "Ticket has been verified successfully by another driver!",
                data: {},
                res,
            });
        }
        const driverTicket = await server_1.prisma.ticket.findFirst({
            where: { AND: [{ id: ticketId }, { driverId }] },
        });
        let updatedTicket = {};
        if (!driverTicket) {
            updatedTicket = await server_1.prisma.ticket.update({
                where: { id: ticketId },
                data: {
                    driverId,
                    status: "Used",
                },
            });
        }
        return (0, successResponse_1.successResponse)({
            message: "Ticket has been verified successfully!",
            data: updatedTicket,
            res,
        });
    }
    catch (err) {
        return (0, errorResponse_1.errorResponse)({
            message: err.message || "Failed to verify ticket!",
            status: 500,
            res,
        });
    }
});
exports.default = VerifyTicketController;
//# sourceMappingURL=verifyTicketController.js.map