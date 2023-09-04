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
const UpdateTicketController = (0, catchAsync_1.default)(async (req, res) => {
    var _a, _b, _c, _d, _e;
    const { tx_ref, transaction_id } = req.body;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    const role = (_b = req.user) === null || _b === void 0 ? void 0 : _b.role;
    let payment_type = "";
    let txRef = "";
    let transID = "";
    try {
        const ticket = await server_1.prisma.ticket.findFirst({
            where: { AND: [{ userId }, { id: tx_ref }] },
        });
        if (!ticket) {
            return (0, errorResponse_1.errorResponse)({
                message: "Ticket not found!",
                status: 404,
                res,
            });
        }
        try {
            const resp = await (0, flw_util_1.FLWVerifyTransaction)(transaction_id);
            // console.log("DATA => ", resp);
            payment_type = resp.data.payment_type;
            txRef = resp.data.tx_ref;
            transID = resp.data.id;
            if (resp.status !== "success") {
                return (0, errorResponse_1.errorResponse)({
                    message: "No transaction was found for this id!",
                    status: 400,
                    res,
                });
            }
        }
        catch (err) {
            // console.log(err)
            return (0, errorResponse_1.errorResponse)({
                message: ((_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.data.message) ||
                    ((_d = err === null || err === void 0 ? void 0 : err.response) === null || _d === void 0 ? void 0 : _d.statusText) ||
                    "Error occured while verifying!",
                status: ((_e = err === null || err === void 0 ? void 0 : err.response) === null || _e === void 0 ? void 0 : _e.status) || 400,
                res,
            });
        }
        const { status, userId: ticketUserId, isPaymentMade } = ticket;
        if (userId !== ticketUserId)
            return (0, errorResponse_1.errorResponse)({
                message: "Not allowed to perform this!",
                status: 403,
                res,
            });
        if (role !== "User")
            return (0, errorResponse_1.errorResponse)({
                message: "Only users can update ticket!",
                status: 403,
                res,
            });
        if (status !== "Active") {
            return (0, errorResponse_1.errorResponse)({
                message: `Ticket has ${status === "Cancelled" || status === "Paid"
                    ? `been ${status}!`
                    : "expired!"}`,
                status: 400,
                res,
            });
        }
        if (isPaymentMade) {
            return (0, errorResponse_1.errorResponse)({
                message: "Payment has been made for this ticket already!",
                status: 400,
                res,
            });
        }
        const updateTicket = await server_1.prisma.ticket.update({
            where: { id: txRef },
            data: {
                trans_id: `${transID}`,
                isPaymentMade: true,
                status: "Paid",
                payment_type,
            },
        });
        return (0, successResponse_1.successResponse)({
            message: "Payment made successfully!",
            data: updateTicket,
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
exports.default = UpdateTicketController;
//# sourceMappingURL=updateTicketController.js.map