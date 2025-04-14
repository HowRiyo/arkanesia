/*
  Warnings:

  - You are about to alter the column `district` on the `Culture` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `province` on the `Culture` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `location` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `district` on the `Tour` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `province` on the `Tour` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `Culture` MODIFY `image` TEXT NULL,
    MODIFY `district` VARCHAR(100) NULL,
    MODIFY `province` VARCHAR(50) NULL;

-- AlterTable
ALTER TABLE `Event` MODIFY `location` VARCHAR(100) NOT NULL,
    MODIFY `image` TEXT NULL,
    MODIFY `description` TEXT NOT NULL,
    MODIFY `link` TEXT NULL;

-- AlterTable
ALTER TABLE `Tour` MODIFY `district` VARCHAR(100) NULL,
    MODIFY `province` VARCHAR(50) NULL;
