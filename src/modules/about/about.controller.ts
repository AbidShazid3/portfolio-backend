import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AboutServices } from "./about.service";
import sendResponse from "../../utils/sendResponse";


const createAbout = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await AboutServices.createAbout(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'About created successfully',
        data: result
    })
})

const getAbout = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await AboutServices.getAbout();
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'About retrieved successfully',
        data: result
    })
})

const updateAbout = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const result = await AboutServices.updateAbout(id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'About updated successfully',
        data: result
    })
})

const deleteAbout = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const result = await AboutServices.deleteAbout(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'About deleted successfully',
        data: result
    })
})

export const AboutController = {
    createAbout,
    getAbout,
    updateAbout,
    deleteAbout
}