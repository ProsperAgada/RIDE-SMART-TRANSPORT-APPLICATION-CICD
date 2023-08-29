import { envConfig } from "./configs/env.config";
import { PrismaClient } from "@prisma/client";
import type { Application } from "express";
import http from "http";

const prisma = new PrismaClient();

const checkConnection = async() => {  
  try {
    await prisma.$connect();
    console.log('😎 Prisma is connected to MongoDB.');
  } catch (error) {
    console.error('😔 Error connecting to MongoDB:', error);
  } finally {
    await prisma.$disconnect();
  }
}

export const startServer = async (app: Application) => {
  // Test Prisma Connection 
  checkConnection();

  const { port, dev, prod } = envConfig;

  // Throw unhandled rejection to a fallback handler
  process.on("unhandledRejection", (reason: Error) => {
    console.log("\x1b[31m%s\x1b[0m", `Unhandled Rejection: ${reason}`);
    throw reason;
  });

  // Kill app if there's an uncaught exception
  process.on("uncaughtException", (error: Error) => {
    console.log("\x1b[31m%s\x1b[0m", `UncaughtException Error: ${error}`);
    process.exit(1);
  });

  const server = http.createServer(app);

  server.listen(port, () => {
    if (dev) {
      console.log(`🚀 Development server ready at http://localhost:${port}`);
    }

    if (prod) {
      console.log(`🚀 Production server running on ${port}`);
    }
  });
};

export {prisma}