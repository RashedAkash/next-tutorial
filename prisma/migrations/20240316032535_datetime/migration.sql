/*
  Warnings:

  - You are about to drop the column `col7` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `col8` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `col9` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `col1` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - You are about to alter the column `col3` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime`.
  - You are about to alter the column `col4` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Timestamp`.
  - You are about to alter the column `col5` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Char(100)` to `Date`.
  - You are about to alter the column `col6` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(10)` to `Time`.
  - Made the column `col2` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `user_col3_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `col7`,
    DROP COLUMN `col8`,
    DROP COLUMN `col9`,
    MODIFY `col1` BOOLEAN NOT NULL,
    MODIFY `col2` DATETIME(3) NOT NULL,
    MODIFY `col3` DATETIME NOT NULL,
    MODIFY `col4` TIMESTAMP NOT NULL,
    MODIFY `col5` DATE NOT NULL,
    MODIFY `col6` TIME NOT NULL;
