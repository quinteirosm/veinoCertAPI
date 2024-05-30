/*
  Warnings:

  - You are about to drop the column `chipId` on the `Chips` table. All the data in the column will be lost.
  - Added the required column `physicalId` to the `Chips` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Chips` DROP COLUMN `chipId`,
    ADD COLUMN `physicalId` VARCHAR(191) NOT NULL;
