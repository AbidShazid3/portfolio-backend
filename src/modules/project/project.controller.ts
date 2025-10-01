import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";


const getAllProjects = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await ProjectServices.getAllProjects();
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'All projects retrieved successfully',
        data: result
    })
})

const getProjectById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const result = await ProjectServices.getProjectById(id);
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Project retrieved successfully',
        data: result
    })
})

const createProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await ProjectServices.createProject(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Project created successfully',
        data: result
    })
})

const updateProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const result = await ProjectServices.updateProject(id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Project updated successfully',
        data: result
    })
})

const deleteProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const result = await ProjectServices.deleteProject(id);
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Project deleted successfully',
        data: result
    })
})

export const ProjectControllers = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
}