/*
  Warnings:

  - You are about to drop the column `out` on the `UserOnRoom` table. All the data in the column will be lost.
  - Added the required column `currentTurnColor` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "currentTurnColor" INTEGER NOT NULL;
UPDATE "Room" SET "currentTurnColor" = 1 WHERE "currentTurnColor" IS NULL;

-- AlterTable
ALTER TABLE "UserOnRoom" DROP COLUMN "out";
