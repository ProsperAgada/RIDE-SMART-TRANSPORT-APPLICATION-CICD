"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = void 0;
const errorResponse = (args) => {
    const { message, status, res, errors = [] } = args;
    return res.status(status).json({
        status: false,
        code: res.statusCode,
        message,
        errors,
    });
};
exports.errorResponse = errorResponse;
//# sourceMappingURL=errorResponse.js.map