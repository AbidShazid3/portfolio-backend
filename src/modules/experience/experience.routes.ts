import express from "express";
import { ExperienceControllers } from "./experience.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { Role } from "@prisma/client";

const router = express.Router();

// Public Routes
router.get("/", ExperienceControllers.getExperiences);

// Admin-only Routes
router.post("/", authMiddleware(Role.ADMIN), ExperienceControllers.createExperience);
router.put("/:id", authMiddleware(Role.ADMIN), ExperienceControllers.updateExperience);
router.delete("/:id", authMiddleware(Role.ADMIN), ExperienceControllers.deleteExperience);

export const ExperienceRoutes = router;