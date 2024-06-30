/*
  Warnings:

  - You are about to drop the column `chipId` on the `Documents` table. All the data in the column will be lost.
  - Added the required column `chipPhysicalId` to the `Documents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Chips` MODIFY `chipId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Documents` DROP COLUMN `chipId`,
    ADD COLUMN `chipPhysicalId` VARCHAR(191) NOT NULL;
