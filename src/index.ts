import express, { Application, Request, Response as Res } from "express";
import { errorResponse } from "./utils/errorResponse";
import vendorRouters from "./routers/vendor.router";
import ticketRouters from "./routers/ticket.router";
import { envConfig } from "./configs/env.config";
import userRouters from "./routers/user.router";
import { Response } from "http-status-codez";
import cookieParser from "cookie-parser";
import { startServer } from "./server";
import compression from "compression";
import xss from "xss-clean";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

(async () => {
  // Initialized Express Application
  const app: Application = express();

  // Prevent Cross-site Scripting Attack
  app.use(xss());

  // Enables Cross-Origin Resource Sharing for various methods(POST,GET,DELETE...)
  app.use(cors());

  // Parses incoming requests with JSON payloads
  app.use(express.json({ limit: "1mb" }));

  // Parses incoming requests with urlencoded payloads
  app.use(express.urlencoded({ extended: true }));

  // Compress response bodies for every request
  app.use(compression());

  // Parse Cookies
  app.use(cookieParser());

  // Add secure HTTP headers
  app.use(
    helmet({
      crossOriginEmbedderPolicy: !envConfig.dev,
      contentSecurityPolicy: !envConfig.dev,
    })
  );

  // Logger middleware using Morgan
  app.use(
    morgan(
      ":date :method :url :status :response-time ms - :res[content-length]"
    )
  );

  app.get("/", (_req: Request, res: Res) => {
    res.send(
      '<h1 style="text-align: center;">RideSmart Server is Ready 👌!</h1>'
    );
  });

  app.use("/api/v1/users", userRouters);
  app.use("/api/v1/vendors", vendorRouters);
  app.use("/api/v1/tickets", ticketRouters);

  app.all("*", (req, res) =>
    errorResponse({
      message: `Can't find ${req.originalUrl} on this route.`,
      status: Response.HTTP_NOT_FOUND,
      res,
    })
  );

  // Start Apollo Server
  startServer(app);
})();
