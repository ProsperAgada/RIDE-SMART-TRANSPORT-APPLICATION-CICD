"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const ENV = process.env.NODE_ENV || "development";
exports.envConfig = {
    test: ENV === "test",
    dev: ENV === "development",
    prod: ENV === "production",
    url: process.env.BASE_URL,
    port: +process.env.PORT || 8081
};
//# sourceMappingURL=env.config.js.map