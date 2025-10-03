import express from "express";
import { SkillControllers } from "./skill.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { Role } from "@prisma/client";

const router = express.Router();

// Public Routes
router.get("/category", SkillControllers.getAllSkillCategories);

router.get("/", SkillControllers.getAllSkill);

// Admin-only Routes
router.post("/category", authMiddleware(Role.ADMIN), SkillControllers.createSkillCategory);
router.put("/category/:id", authMiddleware(Role.ADMIN), SkillControllers.updateSkillCategory);
router.delete("/category/:id", authMiddleware(Role.ADMIN), SkillControllers.deleteSkillCategory);

router.post("/", authMiddleware(Role.ADMIN), SkillControllers.createSkill);
router.put("/:id", authMiddleware(Role.ADMIN), SkillControllers.updateSkill);
router.delete("/:id", authMiddleware(Role.ADMIN), SkillControllers.deleteSkill);

export const SkillRoutes = router;