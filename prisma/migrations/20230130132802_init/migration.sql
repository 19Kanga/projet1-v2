-- AlterTable
ALTER TABLE `payementmethode` MODIFY `type` ENUM('VISA', 'PAYPAL', 'UBA') NOT NULL DEFAULT 'VISA';

-- AlterTable
ALTER TABLE `user` MODIFY `type` ENUM('CLIENT', 'ADMIN') NOT NULL DEFAULT 'CLIENT';
