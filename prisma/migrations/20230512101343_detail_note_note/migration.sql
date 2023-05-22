/*
  Warnings:

  - You are about to drop the column `detailId` on the `note` table. All the data in the column will be lost.
  - Added the required column `noteId` to the `detailnote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `note` DROP FOREIGN KEY `note_detailId_fkey`;

-- AlterTable
ALTER TABLE `detailnote` ADD COLUMN `noteId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `note` DROP COLUMN `detailId`;

-- AlterTable
ALTER TABLE `user` MODIFY `type` ENUM('ETUDIANT', 'ADMIN') NOT NULL DEFAULT 'ETUDIANT';

-- AddForeignKey
ALTER TABLE `detailnote` ADD CONSTRAINT `detailnote_noteId_fkey` FOREIGN KEY (`noteId`) REFERENCES `note`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
