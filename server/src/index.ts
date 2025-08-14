import "dotenv/config";
import cors from "cors";
import { config } from "./config/app.config";
import connectDatabase from "./config/database.config";
import express, { NextFunction, Request, Response } from "express";

import passport from "passport";
import "./config/passport.config";

import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";
import taskRoutes from "./routes/task.route";
import memberRoutes from "./routes/member.route";
import projectRoutes from "./routes/project.route";
import workspaceRoutes from "./routes/workspace.route";

import { asyncHandler } from "./middlewares/asyncHandler.middleware";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { HTTPSTATUS } from "./config/http.config";
import { passportAuthenticateJWT } from "./config/passport.config";

const app = express();
const BASE_PATH = config.BASE_PATH;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use(
  cors({
    origin: config.FRONTEND_ORIGIN,
    credentials: true,
  })
);

app.get(
  `/`,
  asyncHandler(async (_req: Request, res: Response, _next: NextFunction) => {
    return res.status(HTTPSTATUS.OK).json({
      message: "Server is running",
    });
  })
);

app.use(`${BASE_PATH}/auth`, authRoutes);
app.use(`${BASE_PATH}/user`, passportAuthenticateJWT, userRoutes);
app.use(`${BASE_PATH}/workspace`, passportAuthenticateJWT, workspaceRoutes);
app.use(`${BASE_PATH}/member`, passportAuthenticateJWT, memberRoutes);
app.use(`${BASE_PATH}/project`, passportAuthenticateJWT, projectRoutes);
app.use(`${BASE_PATH}/task`, passportAuthenticateJWT, taskRoutes);

app.use(errorHandler);

app.listen(config.PORT, async () => {
  console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`);
  await connectDatabase();
});
