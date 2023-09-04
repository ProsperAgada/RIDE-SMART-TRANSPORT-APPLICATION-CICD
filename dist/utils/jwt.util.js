"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWToken = exports.signRefreshJWToken = exports.signAccessJWToken = void 0;
const constant_config_1 = require("../configs/constant.config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { secretKey, expiresIn, refreshIn } = constant_config_1.constant;
const signAccessJWToken = async (payload) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: expiresIn }, (error, token) => {
            if (error)
                reject(error);
            resolve(token);
        });
    });
};
exports.signAccessJWToken = signAccessJWToken;
const signRefreshJWToken = async (payload) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: refreshIn }, (error, token) => {
            if (error)
                reject(error);
            resolve(token);
        });
    });
};
exports.signRefreshJWToken = signRefreshJWToken;
const verifyJWToken = async (token) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, secretKey, (error, decode) => {
            if (error)
                reject(error);
            resolve(decode);
        });
    });
};
exports.verifyJWToken = verifyJWToken;
//# sourceMappingURL=jwt.util.js.map