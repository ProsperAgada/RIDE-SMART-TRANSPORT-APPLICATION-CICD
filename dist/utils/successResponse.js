"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = void 0;
const successResponse = (args) => {
    const { data = {}, message, status = 200, res, other = [] } = args;
    return res.status(status).json({
        status: true,
        code: res.statusCode,
        message,
        data,
        other
    });
};
exports.successResponse = successResponse;
//# sourceMappingURL=successResponse.js.map