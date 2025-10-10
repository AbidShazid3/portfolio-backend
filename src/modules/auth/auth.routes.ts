import express from 'express';
import { AuthControllers } from "./auth.controller";
import { authMiddleware } from '../../middlewares/authMiddleware';


const router = express.Router();

// Login
router.post("/login", AuthControllers.login);
router.post("/logout", AuthControllers.logout);

router.get("/me", authMiddleware("ADMIN"), AuthControllers.getMe);

export const AuthRoutes = router;