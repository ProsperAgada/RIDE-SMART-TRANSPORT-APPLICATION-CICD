"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_util_1 = require("../../utils/jwt.util");
const successResponse_1 = require("../../utils/successResponse");
const errorResponse_1 = require("../../utils/errorResponse");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const server_1 = require("../../server");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const LoginUserController = (0, catchAsync_1.default)(async (req, res) => {
    const { matricNo, password } = req.body;
    try {
        // Check if the user exists
        const user = await server_1.prisma.user.findFirst({ where: { OR: [{ matricNo }] } });
        if (!user) {
            return (0, errorResponse_1.errorResponse)({
                message: "User doesn't exists!",
                status: 404,
                res,
            });
        }
        // Verify the password
        const passwordMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return (0, errorResponse_1.errorResponse)({
                message: "Invalid password!",
                status: 400,
                res,
            });
        }
        if (user.role !== "User") {
            return (0, errorResponse_1.errorResponse)({
                message: "Can't login, not a user!",
                status: 403,
                res,
            });
        }
        // Generate Access and Refreshed Token
        const accessToken = await (0, jwt_util_1.signAccessJWToken)({
            id: user.id,
            email: user.email,
            role: user.role,
        });
        const refreshToken = await (0, jwt_util_1.signRefreshJWToken)({
            id: user.id,
            email: user.email,
            role: user.role,
        });
        return (0, successResponse_1.successResponse)({
            message: "Login successfully",
            data: {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                matricNo: user.matricNo,
                phone: user.phone,
                role: user.role,
                accessToken,
                refreshToken,
            },
            res,
        });
    }
    catch (err) {
        return (0, errorResponse_1.errorResponse)({
            message: err.message || "An error occurred",
            status: 500,
            res,
        });
    }
});
exports.default = LoginUserController;
//# sourceMappingURL=loginUserController.js.map