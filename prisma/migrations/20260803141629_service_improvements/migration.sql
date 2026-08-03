/*
  Warnings:

  - Added the required column `updatedAt` to the `FAQ` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `GalleryImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Setting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."FAQ" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."GalleryImage" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Service" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "displayOrder" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "public"."Setting" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Testimonial" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
