import { Experience, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";
import AppError from "../../error/AppError";
import { CreateExperienceDTO } from "../../types/experience";

const createExperience = async (payload: CreateExperienceDTO): Promise<Experience> => {
    const aboutMe = await prisma.aboutMe.findFirst();
    if (!aboutMe) {
        throw new AppError(400, "AboutMe profile not found. Please create it first.");
    }

    const experience = await prisma.experience.create({
        data: {
            ...payload,
            aboutMeId: Number(aboutMe.id)
        }
    });
    return experience;
};

const getExperiences = async () => {
    const experiences = await prisma.experience.findMany({
        orderBy: { createdAt: 'desc' }
    });
    return experiences;
};

const updateExperience = async (id: number, payload: Partial<Experience>) => {
    const updated = await prisma.experience.update({
        where: { id },
        data: payload
    });
    return updated;
};

const deleteExperience = async (id: number) => {
    const deleted = await prisma.experience.delete({
        where: { id }
    });
    return deleted;
};

export const ExperienceServices = {
    createExperience,
    getExperiences,
    updateExperience,
    deleteExperience
};
