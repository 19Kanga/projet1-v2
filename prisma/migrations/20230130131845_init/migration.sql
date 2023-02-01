-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `type` ENUM('CLIENT', 'ADMIN') NOT NULL DEFAULT 'CLIENT',
    `address` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_username_key`(`username`),
    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payementMethode` (
    `id` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `cvv` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `expiry_date` DATETIME(3) NOT NULL,
    `type` ENUM('VISA', 'PAYPAL', 'UBA') NOT NULL DEFAULT 'VISA',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
