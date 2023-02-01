-- AlterTable
ALTER TABLE `payementmethode` MODIFY `type` ENUM('VISA', 'PAYPAL', 'UBA') NOT NULL DEFAULT 'VISA';

-- AlterTable
ALTER TABLE `user` MODIFY `type` ENUM('CLIENT', 'ADMIN') NOT NULL DEFAULT 'CLIENT';

-- CreateTable
CREATE TABLE `supplier` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `supplier_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
