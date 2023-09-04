"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const errorResponse_1 = require("../utils/errorResponse");
const jwt_util_1 = require("../utils/jwt.util");
const authenticateToken = async (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        return (0, errorResponse_1.errorResponse)({
            message: "Token not provided",
            status: 401,
            res,
        });
    }
    let user = { id: "", email: "", role: "" };
    try {
        user = await (0, jwt_util_1.verifyJWToken)(token);
    }
    catch (err) {
        return (0, errorResponse_1.errorResponse)({
            message: err.message || "Invalid Token",
            status: 403,
            res,
        });
    }
    req.user = user;
    next();
};
exports.authenticateToken = authenticateToken;
//# sourceMappingURL=authenticateToken.js.map