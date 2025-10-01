import { Request, Response, NextFunction } from "express";
import AppError from "../error/AppError";
import { Prisma } from "@prisma/client";

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let statusCode = 500;
    let message = "Internal Server Error";

    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
    } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
            statusCode = 400;
            message = `Duplicate field value for: ${err.meta?.target}`;
        }
    } else if (err instanceof Error) {
        message = err.message;
    }

    res.status(statusCode).json({
        success: false,
        message,
        err: process.env.NODE_ENV === "development" ? err: null,
        stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
};
