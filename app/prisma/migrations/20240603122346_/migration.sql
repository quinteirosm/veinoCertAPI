/*
  Warnings:

  - You are about to drop the column `physicalId` on the `Chips` table. All the data in the column will be lost.
  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pseudo` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `otk` to the `Chips` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phyId` to the `Chips` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timestamp` to the `Chips` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bio` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Chips` DROP COLUMN `physicalId`,
    ADD COLUMN `otk` VARCHAR(191) NOT NULL,
    ADD COLUMN `phyId` VARCHAR(191) NOT NULL,
    ADD COLUMN `timestamp` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Users` DROP PRIMARY KEY,
    DROP COLUMN `pseudo`,
    ADD COLUMN `bio` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Users_id_key` ON `Users`(`id`);
