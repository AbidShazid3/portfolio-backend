import express from "express";
import { AboutController } from "./about.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { Role } from "@prisma/client";

const router = express.Router();

// Public Routes
router.get("/", AboutController.getAbout);

// Admin-only Routes
router.post("/", authMiddleware(Role.ADMIN), AboutController.createAbout);
router.put("/:id", authMiddleware(Role.ADMIN), AboutController.updateAbout);
router.delete("/:id", authMiddleware(Role.ADMIN), AboutController.deleteAbout);

export const AboutRoutes = router;