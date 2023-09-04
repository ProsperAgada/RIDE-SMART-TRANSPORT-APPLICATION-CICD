"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse_1 = require("../../utils/successResponse");
const errorResponse_1 = require("../../utils/errorResponse");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const server_1 = require("../../server");
const GetSingleUserTicketController = (0, catchAsync_1.default)(async (req, res) => {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    const { id } = req.params;
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
        return (0, successResponse_1.successResponse)({
            message: "Fetch successfully!",
            data: ticket,
            res,
        });
    }
    catch (err) {
        return (0, errorResponse_1.errorResponse)({
            message: err.message || "Failed to get ticket!",
            status: 500,
            res,
        });
    }
});
exports.default = GetSingleUserTicketController;
//# sourceMappingURL=getSingleUserTicketController.js.map