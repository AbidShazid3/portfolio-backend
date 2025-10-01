import { Blog, Prisma } from "@prisma/client";
import { prisma } from "../../config/db"

const getAllBlogs = async ({ page = 1, limit = 10, search, isFeatured, tags, sortBy = 'createdAt', sortOrder = 'desc' }: { page?: number, limit?: number, search?: string, isFeatured?: boolean, tags?: string[], sortBy?: string, sortOrder?: 'asc' | 'desc' }) => {
    const where: any = {
        AND: [
            search && {
                OR: [
                    { title: { contains: search, mode: 'insensitive' } },
                    { content: { contains: search, mode: 'insensitive' } }
                ]
            },
            typeof isFeatured === 'boolean' && { isFeatured },
            tags && tags.length > 0 && { tags: { hasEvery: tags } }
        ].filter(Boolean)
    }

    const result = await prisma.blog.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where,
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true
                }
            }
        },
        orderBy: {
            [sortBy]: sortOrder
        },
    })
    const total = await prisma.blog.count({ where })

    return {
        data: result,
        metaData: {
            page,
            limit,
            total,
            totalPage: Math.ceil(total / limit)
        }
    }
};

const getBlogById = async (id: number) => {
    return await prisma.$transaction(async (tx) => {
        await tx.blog.update({
            where: { id },
            data: {
                views: {
                    increment: 1
                }
            }
        });
        return await tx.blog.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true
                    }
                }
            },
        })
    })

    return {}
};

const createBlog = async (payload: Prisma.BlogCreateInput): Promise<Blog> => {
    const result = await prisma.blog.create({
        data: payload,
        include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true
                    }
                }
            },
    })

    return result
}
const updateBlog = async (id: number, payload: Partial<Blog>) => {
    const result = await prisma.blog.update({
        where: { id },
        data: payload
    })
    return result
}
const deleteBlog = async (id: number) => {
    const result = await prisma.blog.delete({
        where: {
            id
        },
    })
    return result;
}

export const BlogServices = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
}