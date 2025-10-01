import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";
import sendResponse from "../../utils/sendResponse";
import { userInfo } from "os";

const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const loginInfo = await AuthServices.login(email, password);
    const { user, accessToken } = loginInfo;

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
    })

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Logged in successfully',
        data: user
    })
})

const logout = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie('accessToken',  {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    })

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Logout successfully',
        data: null,
    })
})

export const AuthControllers = {
    login,
    logout
}