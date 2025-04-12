/*
  Warnings:

  - You are about to alter the column `prices` on the `tour` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `tour` MODIFY `prices` DOUBLE NOT NULL;
