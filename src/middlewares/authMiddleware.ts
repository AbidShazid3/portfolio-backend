import { NextFunction, Request, Response } from "express";
import AppError from "../error/AppError";
import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "../config/db";

export const authMiddleware = (...authRoles: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accessToken = req.headers.authorization || req.cookies.accessToken;
        if (!accessToken) {
            throw new AppError(403, "No token received")
        }

        const verifiedToken = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET as string) as JwtPayload

        const isUserExist = await prisma.user.findUnique({
            where: {
                email: verifiedToken.email
            }
        })
        if (!isUserExist) {
            throw new AppError(400, 'User Not found')
        }

        if (!authRoles.includes(verifiedToken.role)) {
            throw new AppError(403, 'You are not permitted to access it')
        }
        req.user = verifiedToken;
        next()
    } catch (error) {
        next(error)
    }
}