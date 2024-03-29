-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `col1` BIGINT NOT NULL,
    `col2` BIGINT NOT NULL,
    `col3` MEDIUMINT NOT NULL,
    `col4` SMALLINT NOT NULL,
    `col5` TINYINT NOT NULL,
    `col6` INTEGER UNSIGNED NOT NULL,
    `col7` MEDIUMINT UNSIGNED NOT NULL,
    `col8` SMALLINT UNSIGNED NOT NULL,
    `col9` TINYINT UNSIGNED NOT NULL,
    `col10` INTEGER NOT NULL,
    `col11` INTEGER NOT NULL DEFAULT 11,

    UNIQUE INDEX `user_col10_key`(`col10`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
