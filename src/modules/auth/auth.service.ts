import { prisma } from "../../config/db"
import AppError from "../../error/AppError"
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const login = async ( email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email
        },
    })

    if (!user) {
        throw new AppError(400, "Email not found")
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
        throw new AppError(400, "Incorrect password")
    }

    const accessToken = jwt.sign(
        { userId: user.id, email: user.email, role: user.role },
        process.env.JWT_ACCESS_SECRET as string,
        { expiresIn: "1d"}
    )

    const { password: pass, ...rest } = user;

    return { user: rest, accessToken}
}



export const AuthServices = {
    login
}