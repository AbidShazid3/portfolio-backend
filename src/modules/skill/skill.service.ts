import { Prisma, Skill, SkillCategory } from "@prisma/client";
import { prisma } from "../../config/db";
import AppError from "../../error/AppError";
import { CreateSkillDTO } from "../../types/skill";


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
        include: { skills: true },
        orderBy: {createdAt: 'asc'}
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

const createSkill = async (payload: CreateSkillDTO) => {
    const aboutMe = await prisma.aboutMe.findFirst();
    if (!aboutMe) {
        throw new AppError(400, "AboutMe profile not found. Please create it first.")
    };

    const categorySkill = await prisma.skillCategory.findUnique({
        where: {
            id: payload.categoryId
        }
    })
    if (!categorySkill) {
        throw new AppError(400, "Skill category not found");
    }

    const skill = await prisma.skill.create({
        data: {
            ...payload,
            aboutMeId: aboutMe.id
        }
    })
    return skill;
}

const getAllSkill = async () => {
    const allSkill = await prisma.skill.findMany({
        include: { category: true }
    })
    return allSkill;
}

const updateSkill = async (id: number, payload: Partial<Skill>) => {
    const updated = await prisma.skill.update({
        where: { id },
        data: payload
    });
    return updated;
}

const deleteSkill = async (id: number) => {
    const deleted = await prisma.skill.delete({
        where: { id }
    });
    return deleted;
}

export const SkillServices = {
    createSkillCategory,
    getAllSkillCategories,
    updateSkillCategory,
    deleteSkillCategory,
    createSkill,
    getAllSkill,
    updateSkill,
    deleteSkill,
};