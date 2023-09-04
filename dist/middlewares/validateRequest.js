"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const errorResponse_1 = require("../utils/errorResponse");
const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return (0, errorResponse_1.errorResponse)({
                message: error.details[0].message,
                status: 400,
                res,
            });
        }
        next();
    };
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validateRequest.js.map