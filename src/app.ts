import compression from "compression";
import cors from "cors";
import cookieParser from 'cookie-parser';
import express, { NextFunction, Request, Response } from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { AuthRoutes } from "./modules/auth/auth.routes";
import { BlogRoutes } from "./modules/blog/blog.routes";
import { ProjectRoutes } from "./modules/project/project.routes";
import { AboutRoutes } from "./modules/about/about.routes";
import { ExperienceRoutes } from "./modules/experience/experience.routes";
import { SkillRoutes } from "./modules/skill/skill.routes";

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser());
app.use(compression()); // Compresses response bodies for faster delivery

app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/blog", BlogRoutes);
app.use("/api/v1/project", ProjectRoutes);
app.use("/api/v1/about", AboutRoutes);
app.use("/api/v1/experience", ExperienceRoutes);
app.use("/api/v1/skill", SkillRoutes);

// Default route for testing
app.get("/", (req: Request, res: Response) => {
  res.send("API is running");
});


// 404 Handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

app.use(errorHandler);

export default app;
