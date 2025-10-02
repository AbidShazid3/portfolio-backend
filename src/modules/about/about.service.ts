import { AboutMe, Prisma } from "@prisma/client"
import { prisma } from "../../config/db";
import AppError from "../../error/AppError";


const createAbout = async (payload: Prisma.AboutMeCreateInput): Promise<AboutMe> => {
    const existing = await prisma.aboutMe.findFirst();
    if (existing) {
        throw new AppError(400, "AboutMe already exists");
    }
    const about = await prisma.aboutMe.create({
        data: payload
    })
    return about
}

const getAbout = async () => {
    const about = await prisma.aboutMe.findFirst({
        include: {
            experience: true,
            skills: true
        }
    });
    return about;

    return {}
}

const updateAbout = async (id: number, payload: Partial<AboutMe>) => {
    const updated = await prisma.aboutMe.update({
        where: { id },
        data: payload
    })

    return updated
}

const deleteAbout = async (id: number) => {
    const deleted = await prisma.aboutMe.delete({
        where: { id }
    });

    return deleted;
}

export const AboutServices = {
    createAbout,
    getAbout,
    updateAbout,
    deleteAbout
}