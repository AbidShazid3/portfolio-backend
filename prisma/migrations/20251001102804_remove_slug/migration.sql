/*
  Warnings:

  - You are about to drop the column `slug` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Project` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Blog_slug_key";

-- DropIndex
DROP INDEX "public"."Project_slug_key";

-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "slug";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "slug";
