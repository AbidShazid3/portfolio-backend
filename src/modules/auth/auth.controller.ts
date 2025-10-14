import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";
import sendResponse from "../../utils/sendResponse";
import { userInfo } from "os";
import { prisma } from "../../config/db";
import AppError from "../../error/AppError";

const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const loginInfo = await AuthServices.login(email, password);
    const { user, accessToken } = loginInfo;

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    })

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Logged in successfully',
        data: {
            user,
            accessToken
        }
    })
})

const logout = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie('accessToken', {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    })

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Logout successfully',
        data: null,
    })
})

const getMe = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const decodedUser = req.user as { email: string }
    const user = await prisma.user.findUnique({
        where: { email: decodedUser.email },
        select: { id: true, name: true, email: true, role: true }
    })

    if (!user) {
        throw new AppError(404, 'User Not found')
    }

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'User fetched successfully',
        data: user,
    })
})

export const AuthControllers = {
    login,
    logout,
    getMe,
}