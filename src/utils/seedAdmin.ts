import dotenv from "dotenv";
import { prisma } from "../config/db";
import bcrypt from 'bcrypt';

dotenv.config();

export const seedAdmin = async () => {
    const adminEmail = process.env.ADMIN_EMAIL as string
    const adminPassword = process.env.ADMIN_PASSWORD as string

    const existAdmin = await prisma.user.findUnique({
        where: {
            email: adminEmail
        }
    })

    if (existAdmin) {
        console.log("Admin already exists");
        return;
    }
    console.log('trying to create super admin');

    const hashedPassword = await bcrypt.hash(adminPassword, Number(process.env.BCRYPT_SALT_ROUND));

    const admin = await prisma.user.create({
    data: {
      name: "Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("✅ Admin created");
  return admin;
}