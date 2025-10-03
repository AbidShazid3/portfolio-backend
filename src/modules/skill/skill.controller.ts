import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { SkillServices } from "./skill.service";
import sendResponse from "../../utils/sendResponse";


const createSkillCategory = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await SkillServices.createSkillCategory(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Skill category created successfully",
        data: result
    });
});

const getAllSkillCategories = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await SkillServices.getAllSkillCategories();
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "All category skill retrieved successfully",
        data: result
    });
});

const updateSkillCategory = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const result = await SkillServices.updateSkillCategory(id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Category skill updated successfully",
        data: result
    });
});

const deleteSkillCategory = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const result = await SkillServices.deleteSkillCategory(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Category skill deleted successfully",
        data: result
    });
});

export const SkillControllers = {
    createSkillCategory,
    getAllSkillCategories,
    updateSkillCategory,
    deleteSkillCategory,
};