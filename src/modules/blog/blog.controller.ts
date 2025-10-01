import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { BlogServices } from "./blog.service";
import sendResponse from "../../utils/sendResponse";


const getAllBlogs = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = (req.query.search as string) || "";
    const isFeatured = req.query.isFeatured ? req.query.isFeatured === "true" : undefined;
    const tags = req.query.tags ? (req.query.tags as string).split(',').map(s => s.trim()) : [];
    const sortBy = (req.query.sortBy as string) || 'createdAt';
    const sortOrder = (req.query.sortOrder as 'asc' | 'desc') || 'desc';

    const result = await BlogServices.getAllBlogs({page, limit, search, isFeatured, tags, sortBy, sortOrder});
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'All Blog retrieved successfully',
        data: result.data,
        meta: result.metaData
    })
})

const getBlogById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const result = await BlogServices.getBlogById(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blog retrieved successfully',
        data: result
    })
})

const createBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await BlogServices.createBlog(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Blog created successfully',
        data: result
    })
})

const updateBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const result = await BlogServices.updateBlog(id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blog updated successfully',
        data: result
    })
})

const deleteBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const result = await BlogServices.deleteBlog(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blog deleted successfully',
        data: result
    })
})

export const BlogController = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
}