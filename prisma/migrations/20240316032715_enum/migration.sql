/*
  Warnings:

  - You are about to alter the column `col3` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `col4` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Added the required column `user` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `user` ENUM('admin', 'teacher', 'user') NOT NULL,
    MODIFY `col3` DATETIME NOT NULL,
    MODIFY `col4` TIMESTAMP NOT NULL;
