/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : csdr_is

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 26/06/2023 22:56:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tbl_course
-- ----------------------------
DROP TABLE IF EXISTS `tbl_course`;
CREATE TABLE `tbl_course`  (
  `id` int NOT NULL,
  `course_name` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `course_code` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_course
-- ----------------------------

-- ----------------------------
-- Table structure for tbl_group
-- ----------------------------
DROP TABLE IF EXISTS `tbl_group`;
CREATE TABLE `tbl_group`  (
  `id` int NOT NULL,
  `tbl_thesis_id` int NULL DEFAULT NULL,
  `tbl_userinfo_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_group
-- ----------------------------

-- ----------------------------
-- Table structure for tbl_panelist
-- ----------------------------
DROP TABLE IF EXISTS `tbl_panelist`;
CREATE TABLE `tbl_panelist`  (
  `id` int NOT NULL,
  `tbl_userinfo_id` int NULL DEFAULT NULL,
  `tbl_thesis_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_panelist
-- ----------------------------

-- ----------------------------
-- Table structure for tbl_thesis
-- ----------------------------
DROP TABLE IF EXISTS `tbl_thesis`;
CREATE TABLE `tbl_thesis`  (
  `id` int NOT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` smallint NULL DEFAULT NULL,
  `stardate` timestamp NULL DEFAULT NULL,
  `enddate` timestamp NULL DEFAULT NULL,
  `category_type` smallint NULL DEFAULT NULL,
  `lastmodified` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `createdon` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_thesis
-- ----------------------------

-- ----------------------------
-- Table structure for tbl_user
-- ----------------------------
DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE `tbl_user`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `firstname` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `middlename` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `lastname` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` smallint NULL DEFAULT NULL COMMENT '0- not Verify, 1 - new, 2 - active, 3 - Deactivate',
  `createdon` timestamp NULL DEFAULT NULL,
  `lastmodified` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_user
-- ----------------------------
INSERT INTO `tbl_user` VALUES (2, 'admin', '$2b$04$npu/tKdhkuDxI54ljqtZt.fJmRjXiiOxOMkOEvN.SPMJq5p6PFT5S', 'test', 'testm', 'testlastname', 'sadsad@gmail.com', 0, '2023-06-21 22:27:04', '2023-06-21 22:27:04');
INSERT INTO `tbl_user` VALUES (9, 'admin1', '$2b$04$y/wc9Ndj.frtyUGDv8Fp8uPd2GcQ6XRNsAkQ42OEF.ZSH/KQDXG92', 'test', 'testm', 'testlastname', 'sadsad@gmail.com', 0, '2023-06-26 21:01:05', '2023-06-26 21:01:05');
INSERT INTO `tbl_user` VALUES (10, 'admin12', '$2b$04$yps9UCGk46GsZDOxhhxh3.cqq3.GBcxHfBvjZk3dwQNHXp57Htp0i', 'test', 'testm', 'testlastname', 'sadsad@gmail.com', 0, '2023-06-26 21:27:30', '2023-06-26 21:27:30');

-- ----------------------------
-- Table structure for tbl_userinfo
-- ----------------------------
DROP TABLE IF EXISTS `tbl_userinfo`;
CREATE TABLE `tbl_userinfo`  (
  `id` int NOT NULL,
  `tbl_user_id` int NULL DEFAULT NULL,
  `tbl_course_id` int NULL DEFAULT NULL,
  `typeofid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `idnumber` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `contacts` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_type` smallint NULL DEFAULT NULL,
  `createdon` timestamp NULL DEFAULT NULL,
  `lastmodified` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_userinfo
-- ----------------------------
INSERT INTO `tbl_userinfo` VALUES (1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `first_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `mid_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `last_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ext_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `contact` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `access_level` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `account_status` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`iduser`) USING BTREE,
  UNIQUE INDEX `idx_username`(`username` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'tonton', '12345', 'Mark', 'antonio', 'Racuya', 'Jr.', 'burat@gmail.com', '091590909090', '1', 'active');
INSERT INTO `user` VALUES (27, 'asd', '$2b$04$Mb/lQinYaZ3Hkbta/YBz1uX3aubPMxrozjqMNb8.nF9231.3.MqYa', '', 'dsad', 'asdasd', 'jr.', 'sadsad@gmail.com', '0945841', '1', 'active');
INSERT INTO `user` VALUES (29, 'admin', '$2b$04$Wi6jMtRkwlxpx4o7dsUye.PchIMv/rKknYB4z37IugEKMHslq3U.q', '', 'dsad', 'asdasd', 'jr.', 'sadsad@gmail.com', '0945841', '1', 'active');

SET FOREIGN_KEY_CHECKS = 1;
