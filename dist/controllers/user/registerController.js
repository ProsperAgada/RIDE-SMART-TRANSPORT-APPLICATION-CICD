"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse_1 = require("../../utils/successResponse");
const errorResponse_1 = require("../../utils/errorResponse");
const titleCase_util_1 = require("../../utils/titleCase.util");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const server_1 = require("../../server");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const RegisterController = (0, catchAsync_1.default)(async (req, res) => {
    const { firstName, lastName, matricNo, email, password, phone } = req.body;
    try {
        // Check if user with the same email already exists
        const existingUser = await server_1.prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return (0, errorResponse_1.errorResponse)({
                message: "User already exists",
                status: 409,
                res,
            });
        }
        // Hash the password
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        // Create the new user
        const newUser = await server_1.prisma.user.create({
            data: {
                firstName: (0, titleCase_util_1.titleCase)(firstName),
                lastName: (0, titleCase_util_1.titleCase)(lastName),
                matricNo: `${matricNo}`.toUpperCase(),
                email,
                password: hashedPassword,
                phone,
            },
        });
        // Remove the password field for security reasons
        Reflect.deleteProperty(newUser, "password");
        return (0, successResponse_1.successResponse)({
            message: "Signed up successfully!",
            data: newUser,
            status: 201,
            res,
        });
    }
    catch (err) {
        return (0, errorResponse_1.errorResponse)({
            message: err.message || "Failed to sign up user",
            status: 500,
            res,
        });
    }
});
exports.default = RegisterController;
//# sourceMappingURL=registerController.js.map