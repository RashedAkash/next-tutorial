-- AlterTable
ALTER TABLE `users` ADD COLUMN `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
