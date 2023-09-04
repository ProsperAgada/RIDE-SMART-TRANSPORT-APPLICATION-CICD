"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorResponse_1 = require("./utils/errorResponse");
const vendor_router_1 = __importDefault(require("./routers/vendor.router"));
const ticket_router_1 = __importDefault(require("./routers/ticket.router"));
const env_config_1 = require("./configs/env.config");
const user_router_1 = __importDefault(require("./routers/user.router"));
const http_status_codez_1 = require("http-status-codez");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const server_1 = require("./server");
const compression_1 = __importDefault(require("compression"));
const xss_clean_1 = __importDefault(require("xss-clean"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
(async () => {
    // Initialized Express Application
    const app = (0, express_1.default)();
    // Prevent Cross-site Scripting Attack
    app.use((0, xss_clean_1.default)());
    // Enables Cross-Origin Resource Sharing for various methods(POST,GET,DELETE...)
    app.use((0, cors_1.default)());
    // Parses incoming requests with JSON payloads
    app.use(express_1.default.json({ limit: "1mb" }));
    // Parses incoming requests with urlencoded payloads
    app.use(express_1.default.urlencoded({ extended: true }));
    // Compress response bodies for every request
    app.use((0, compression_1.default)());
    // Parse Cookies
    app.use((0, cookie_parser_1.default)());
    // Add secure HTTP headers
    app.use((0, helmet_1.default)({
        crossOriginEmbedderPolicy: !env_config_1.envConfig.dev,
        contentSecurityPolicy: !env_config_1.envConfig.dev,
    }));
    // Logger middleware using Morgan
    app.use((0, morgan_1.default)(":date :method :url :status :response-time ms - :res[content-length]"));
    app.get("/", (_req, res) => {
        res.send('<h1 style="text-align: center;">RideSmart Backend Server is Ready 👌!</h1>');
    });
    app.use("/api/v1/users", user_router_1.default);
    app.use("/api/v1/vendors", vendor_router_1.default);
    app.use("/api/v1/tickets", ticket_router_1.default);
    app.all("*", (req, res) => (0, errorResponse_1.errorResponse)({
        message: `Can't find ${req.originalUrl} on this route.`,
        status: http_status_codez_1.Response.HTTP_NOT_FOUND,
        res,
    }));
    // Start Apollo Server
    (0, server_1.startServer)(app);
})();
//# sourceMappingURL=index.js.map