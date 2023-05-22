/*
  Warnings:

  - You are about to drop the column `module` on the `detailnote` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `detailnote_module_key` ON `detailnote`;

-- AlterTable
ALTER TABLE `detailnote` DROP COLUMN `module`;

-- AlterTable
ALTER TABLE `user` MODIFY `type` ENUM('ETUDIANT', 'ADMIN') NOT NULL DEFAULT 'ETUDIANT';
