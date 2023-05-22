/*
  Warnings:

  - You are about to drop the column `admis` on the `note` table. All the data in the column will be lost.
  - You are about to drop the column `echec` on the `note` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `note` DROP COLUMN `admis`,
    DROP COLUMN `echec`,
    DROP COLUMN `total`;

-- AlterTable
ALTER TABLE `user` MODIFY `type` ENUM('ETUDIANT', 'ADMIN') NOT NULL DEFAULT 'ETUDIANT';
