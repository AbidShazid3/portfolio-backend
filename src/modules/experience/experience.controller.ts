import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { ExperienceServices } from "./experience.service";
import sendResponse from "../../utils/sendResponse";


const createExperience = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await ExperienceServices.createExperience(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Experience created successfully",
        data: result
    });
});

const getExperiences = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await ExperienceServices.getExperiences();
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Experiences retrieved successfully",
        data: result
    });
});

const updateExperience = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const result = await ExperienceServices.updateExperience(id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Experience updated successfully",
        data: result
    });
});

const deleteExperience = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const result = await ExperienceServices.deleteExperience(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Experience deleted successfully",
        data: result
    });
});

export const ExperienceControllers = {
  createExperience,
  getExperiences,
  updateExperience,
  deleteExperience
};