import { Prisma, SkillCategory } from "@prisma/client";
import { prisma } from "../../config/db";
import AppError from "../../error/AppError";


const createSkillCategory = async (payload: Prisma.SkillCategoryCreateInput): Promise<SkillCategory> => {
    const existing = await prisma.skillCategory.findUnique({
        where: { name: payload.name }
    });
    if (existing) {
        throw new AppError(400, "Skill category already exists");
    }

    const category = await prisma.skillCategory.create({
        data: payload,
    });

    return category;
};

const getAllSkillCategories = async () => {
    const allCategories = await prisma.skillCategory.findMany({
        include: { skills: true }
    });
    return allCategories;
};

const updateSkillCategory = async (id: number, payload: Partial<SkillCategory>) => {
    const updated = await prisma.skillCategory.update({
        where: { id },
        data: payload
    });
    return updated;
};

const deleteSkillCategory = async (id: number) => {
    const deleted = await prisma.skillCategory.delete({
        where: { id }
    })
    return deleted;
}

export const SkillServices = {
    createSkillCategory,
    getAllSkillCategories,
    updateSkillCategory,
    deleteSkillCategory,
};