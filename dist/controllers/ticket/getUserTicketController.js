"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse_1 = require("../../utils/successResponse");
const errorResponse_1 = require("../../utils/errorResponse");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const server_1 = require("../../server");
const GetUserTicketController = (0, catchAsync_1.default)(async (req, res) => {
    var _a, _b, _c;
    let { page, limit } = req.query;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    const driverId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.id;
    const role = (_c = req.user) === null || _c === void 0 ? void 0 : _c.role;
    const limitNum = +limit || 10;
    const pgNum = +page || 1;
    const offset = (pgNum - 1) * limitNum;
    const totalCount = role === "User"
        ? await server_1.prisma.ticket.count({
            where: { userId },
        })
        : await server_1.prisma.ticket.count({
            where: { OR: [{ driverId }] },
        });
    const totalPages = Math.ceil(totalCount / limitNum);
    try {
        const tickets = role === "User"
            ? await server_1.prisma.ticket.findMany({
                where: { userId },
                orderBy: { date: "desc" },
                take: limitNum,
                skip: offset,
                include: {
                    user: true,
                },
            })
            : await server_1.prisma.ticket.findMany({
                where: { OR: [{ driverId }] },
                orderBy: { date: "desc" },
                take: limitNum,
                skip: offset,
                include: {
                    user: true,
                },
            });
        return (0, successResponse_1.successResponse)({
            message: "Fetch successfully",
            data: tickets,
            res,
            other: {
                totalCount,
                totalPages
            }
        });
    }
    catch (err) {
        return (0, errorResponse_1.errorResponse)({
            message: err.message || "Failed to get tickets",
            status: 500,
            res,
        });
    }
});
exports.default = GetUserTicketController;
//# sourceMappingURL=getUserTicketController.js.map