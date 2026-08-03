/*
  Warnings:

  - Made the column `title` on table `GalleryImage` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."GalleryImage" ALTER COLUMN "title" SET NOT NULL;
