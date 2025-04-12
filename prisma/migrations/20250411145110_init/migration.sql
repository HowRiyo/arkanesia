-- CreateTable
CREATE TABLE `Culture` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `langtitude` DOUBLE NULL,
    `longitude` DOUBLE NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Culture_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
