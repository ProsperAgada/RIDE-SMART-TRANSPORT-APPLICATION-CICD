"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.startServer = void 0;
const env_config_1 = require("./configs/env.config");
const client_1 = require("@prisma/client");
const http_1 = __importDefault(require("http"));
const prisma = new client_1.PrismaClient();
exports.prisma = prisma;
const checkConnection = async () => {
    try {
        await prisma.$connect();
        console.log('😎 Prisma is connected to MongoDB.');
    }
    catch (error) {
        console.error('😔 Error connecting to MongoDB:', error);
    }
    finally {
        await prisma.$disconnect();
    }
};
const startServer = async (app) => {
    // Test Prisma Connection 
    checkConnection();
    const { port, dev, prod } = env_config_1.envConfig;
    // Throw unhandled rejection to a fallback handler
    process.on("unhandledRejection", (reason) => {
        console.log("\x1b[31m%s\x1b[0m", `Unhandled Rejection: ${reason}`);
        throw reason;
    });
    // Kill app if there's an uncaught exception
    process.on("uncaughtException", (error) => {
        console.log("\x1b[31m%s\x1b[0m", `UncaughtException Error: ${error}`);
        process.exit(1);
    });
    const server = http_1.default.createServer(app);
    server.listen(port, () => {
        if (dev) {
            console.log(`🚀 Development server ready at http://localhost:${port}`);
        }
        if (prod) {
            console.log(`🚀 Production server running on ${port}`);
        }
    });
};
exports.startServer = startServer;
//# sourceMappingURL=server.js.map