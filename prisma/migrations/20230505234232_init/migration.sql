-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `type` ENUM('ETUDIANT', 'ADMIN') NOT NULL DEFAULT 'ETUDIANT',
    `address` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `profile` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `parentId` VARCHAR(191) NULL,
    `classeId` VARCHAR(191) NULL,

    UNIQUE INDEX `user_username_key`(`username`),
    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `parent` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `profileP` VARCHAR(191) NULL,

    UNIQUE INDEX `parent_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `classes` (
    `id` VARCHAR(191) NOT NULL,
    `nomClasse` VARCHAR(191) NOT NULL,
    `niveau_classe` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `classes_nomClasse_key`(`nomClasse`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `note` (
    `id` VARCHAR(191) NOT NULL,
    `moyenne` DOUBLE NOT NULL,
    `credit` INTEGER NOT NULL,
    `typeNote` ENUM('CC1', 'CC2', 'NORMALE', 'RATTRAPAGE') NOT NULL,
    `typeSemestre` ENUM('SEMESTRE1', 'SEMESTRE2') NOT NULL,
    `total` BIGINT NULL,
    `admis` INTEGER NULL,
    `echec` INTEGER NULL,
    `detailId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `classeId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detailnote` (
    `id` VARCHAR(191) NOT NULL,
    `module` VARCHAR(191) NOT NULL,
    `matiere` VARCHAR(191) NOT NULL,
    `notes` DOUBLE NOT NULL,

    UNIQUE INDEX `detailnote_module_key`(`module`),
    UNIQUE INDEX `detailnote_matiere_key`(`matiere`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resultat` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `communique` (
    `id` VARCHAR(191) NOT NULL,
    `classe` VARCHAR(191) NOT NULL,
    `objet` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `statut` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `parent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_classeId_fkey` FOREIGN KEY (`classeId`) REFERENCES `classes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `note` ADD CONSTRAINT `note_detailId_fkey` FOREIGN KEY (`detailId`) REFERENCES `detailnote`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `note` ADD CONSTRAINT `note_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `note` ADD CONSTRAINT `note_classeId_fkey` FOREIGN KEY (`classeId`) REFERENCES `classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
