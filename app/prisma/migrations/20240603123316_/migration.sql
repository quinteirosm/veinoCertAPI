/*
  Warnings:

  - The primary key for the `Chips` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Documents` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Chips` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Documents` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Chips` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Documents` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Chips_id_key` ON `Chips`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Documents_id_key` ON `Documents`(`id`);
