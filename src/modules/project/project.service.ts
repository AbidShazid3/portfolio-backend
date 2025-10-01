import { Prisma, Project } from "@prisma/client";
import { prisma } from "../../config/db"


const getAllProjects = async () => {
    const result = prisma.project.findMany({
        where: { published: true },
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
        orderBy: { createdAt: "desc" },
    });
    return result;
}

const getProjectById = async (id: number) => {
    const result = prisma.project.findUnique({
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
    return result;
}

const createProject = async (payload: Prisma.ProjectCreateInput): Promise<Project> => {
    const result = await prisma.project.create({
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
    return result;
}

const updateProject = async (id: number, payload: Partial<Project>) => {
    const result = await prisma.project.update({
        where: { id },
        data: payload
    })
    return result;
}

const deleteProject = async (id: number) => {
    const result = await prisma.project.delete({
        where: { id }
    })
    return result;
}

export const ProjectServices = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
}