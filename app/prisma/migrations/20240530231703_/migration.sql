/*
  Warnings:

  - Added the required column `chipId` to the `Chips` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Chips` DROP FOREIGN KEY `Chips_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Documents` DROP FOREIGN KEY `Documents_chipId_fkey`;

-- DropForeignKey
ALTER TABLE `Documents` DROP FOREIGN KEY `Documents_userId_fkey`;

-- AlterTable
ALTER TABLE `Chips` ADD COLUMN `chipId` INTEGER NOT NULL;
