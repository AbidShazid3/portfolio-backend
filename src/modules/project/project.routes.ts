import express from "express";
import { ProjectControllers } from "./project.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { Role } from "@prisma/client";

const router = express.Router();

// Public Routes
router.get("/", ProjectControllers.getAllProjects);
router.get("/:id", ProjectControllers.getProjectById);

// Admin-Only Routes
router.post("/", authMiddleware(Role.ADMIN), ProjectControllers.createProject);
router.put("/:id", authMiddleware(Role.ADMIN), ProjectControllers.updateProject);
router.delete("/:id", authMiddleware(Role.ADMIN), ProjectControllers.deleteProject);

export const ProjectRoutes = router;