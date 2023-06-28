/*
  Warnings:

  - Added the required column `roomName` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "roomName" TEXT NOT NULL;
UPDATE "Room" SET "roomName" = 'オセロルーム' WHERE "roomName" IS NULL;