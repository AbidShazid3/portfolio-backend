import express from "express";
import { BlogController } from "./blog.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { Role } from "@prisma/client";

const router = express.Router();

// Public Routes
router.get("/", BlogController.getAllBlogs);
router.get("/:id", BlogController.getBlogById);

// Admin-only Routes
router.post("/", authMiddleware(Role.ADMIN), BlogController.createBlog);
router.put("/:id", authMiddleware(Role.ADMIN), BlogController.updateBlog);
router.delete("/:id", authMiddleware(Role.ADMIN), BlogController.deleteBlog);

export const BlogRoutes = router;