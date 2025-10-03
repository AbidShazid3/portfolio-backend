import express from "express";
import { SkillControllers } from "./skill.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { Role } from "@prisma/client";

const router = express.Router();

// Public Routes
router.get("/", SkillControllers.getAllSkillCategories);

// Admin-only Routes
router.post("/", authMiddleware(Role.ADMIN), SkillControllers.createSkillCategory);
router.put("/:id", authMiddleware(Role.ADMIN), SkillControllers.updateSkillCategory);
router.delete("/:id", authMiddleware(Role.ADMIN), SkillControllers.deleteSkillCategory);

export const SkillRoutes = router;