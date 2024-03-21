/*
  Warnings:

  - You are about to drop the column `col10` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `col11` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `col4` on the `user` table. The data in that column could be lost. The data in that column will be cast from `SmallInt` to `VarChar(191)`.
  - You are about to alter the column `col5` on the `user` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Char(100)`.
  - You are about to alter the column `col6` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `VarChar(10)`.
  - You are about to alter the column `col7` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedMediumInt` to `LongText`.
  - You are about to alter the column `col8` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedSmallInt` to `TinyText`.
  - You are about to alter the column `col9` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedTinyInt` to `MediumText`.
  - A unique constraint covering the columns `[col3]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `user_col10_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `col10`,
    DROP COLUMN `col11`,
    MODIFY `col1` VARCHAR(191) NOT NULL,
    MODIFY `col2` VARCHAR(191) NULL,
    MODIFY `col3` VARCHAR(191) NOT NULL,
    MODIFY `col4` VARCHAR(191) NOT NULL DEFAULT 'akash',
    MODIFY `col5` CHAR(100) NOT NULL,
    MODIFY `col6` VARCHAR(10) NOT NULL,
    MODIFY `col7` LONGTEXT NOT NULL,
    MODIFY `col8` TINYTEXT NOT NULL,
    MODIFY `col9` MEDIUMTEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_col3_key` ON `user`(`col3`);
