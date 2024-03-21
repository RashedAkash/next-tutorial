/*
  Warnings:

  - You are about to drop the column `col1` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `col2` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `col3` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `col4` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `col5` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `col6` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `col1`,
    DROP COLUMN `col2`,
    DROP COLUMN `col3`,
    DROP COLUMN `col4`,
    DROP COLUMN `col5`,
    DROP COLUMN `col6`,
    DROP COLUMN `user`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `user_email_key` ON `user`(`email`);

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
