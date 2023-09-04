"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse_1 = require("../../utils/successResponse");
const errorResponse_1 = require("../../utils/errorResponse");
const constant_config_1 = require("../../configs/constant.config");
const env_config_1 = require("../../configs/env.config");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const axios_1 = __importDefault(require("axios"));
const { FLWPaymentEndpoint, FLWSECKTest, logoLink } = constant_config_1.constant;
const { url } = env_config_1.envConfig;
const MakePaymentController = (0, catchAsync_1.default)(async (req, res) => {
    var _a, _b, _c, _d;
    try {
        const response = await axios_1.default.post(FLWPaymentEndpoint, {
            tx_ref: "64a56e0d102189f999227d03",
            amount: "300",
            currency: "NGN",
            redirect_url: `${url}api/v1/vendors/callback`,
            payment_options: "card,mobilemoney,ussd",
            customer: {
                email: "nelson@gmail.com",
                phonenumber: "07037839012",
                name: `Nelson Amali`,
            },
            customizations: {
                title: "RideSmart Payments",
                description: "RideSmart provides a reliable and efficient solution that commute needs",
                logo: `${logoLink}`,
            },
        }, {
            headers: {
                Authorization: `Bearer ${FLWSECKTest}`,
            },
        });
        const { link } = response.data.data;
        return (0, successResponse_1.successResponse)({
            message: "Ticket created successfully!",
            data: link,
            status: 201,
            res,
        });
    }
    catch (err) {
        return (0, errorResponse_1.errorResponse)({
            message: ((_b = (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) ||
                ((_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.statusText) ||
                "Error occured when generating payment link!",
            status: ((_d = err === null || err === void 0 ? void 0 : err.response) === null || _d === void 0 ? void 0 : _d.status) || 500,
            res,
        });
    }
});
exports.default = MakePaymentController;
//# sourceMappingURL=MakePaymentController.js.map