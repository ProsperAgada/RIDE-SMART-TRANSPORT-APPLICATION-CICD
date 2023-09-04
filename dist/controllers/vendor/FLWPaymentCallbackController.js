"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorResponse_1 = require("../../utils/errorResponse");
const constant_config_1 = require("../../configs/constant.config");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const server_1 = require("../../server");
const axios_1 = __importDefault(require("axios"));
const { FLWSECKTest } = constant_config_1.constant;
const FLWPaymentCallbackController = (0, catchAsync_1.default)(async (req, res) => {
    var _a, _b, _c;
    const { status, tx_ref, //RideSmart Ticket Reference ID
    transaction_id, //flutterwave's transaction reference
     } = req.query;
    try {
        const ticket = await server_1.prisma.ticket.findFirst({
            where: { OR: [{ id: tx_ref }] },
        });
        if (!ticket)
            return (0, errorResponse_1.errorResponse)({
                message: `No Ticket was found for this id: ${tx_ref}`,
                status: 404,
                res,
            });
        //  url to verify flutterwave transaction to confirm payment before giving value
        const flwPaymentConfirmationUrl = `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`;
        if (status === "cancelled" || ticket.isPaymentMade) {
            return res.redirect(ticket.callbackUrl);
        }
        if (status === "successful" && tx_ref && transaction_id) {
            try {
                //verify the signature of the transaction before giving value
                const response = await axios_1.default.get(flwPaymentConfirmationUrl, {
                    headers: {
                        Authorization: `Bearer ${FLWSECKTest}`,
                    },
                });
                const { status: responseStatus, data } = response.data;
                if (responseStatus === "success") {
                    const updatedTicket = await server_1.prisma.ticket.update({
                        where: { id: tx_ref },
                        data: {
                            trans_id: `${data.id}`,
                            isPaymentMade: true,
                            status: "Paid",
                            payment_type: data.payment_type,
                        },
                    });
                    return res.redirect(updatedTicket.callbackUrl);
                }
            }
            catch (err) {
                return (0, errorResponse_1.errorResponse)({
                    message: ((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data.message) ||
                        ((_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.statusText) ||
                        "Error occured while verifying!",
                    status: ((_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.status) || 400,
                    res,
                });
            }
        }
        return (0, errorResponse_1.errorResponse)({
            message: "Invalid transaction!",
            status: 422,
            res,
        });
    }
    catch (err) {
        return (0, errorResponse_1.errorResponse)({
            message: (err === null || err === void 0 ? void 0 : err.message) || "An error occurred!",
            status: 500,
            res,
        });
    }
});
exports.default = FLWPaymentCallbackController;
//# sourceMappingURL=FLWPaymentCallbackController.js.map