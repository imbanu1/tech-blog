-- Drop and create database
DROP DATABASE IF EXISTS tech_blog_db;
CREATE DATABASE tech_blog_db;

USE tech_blog_db;

-- Create user table if not exists
CREATE TABLE IF NOT EXISTS `user` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Add username column to user table
ALTER TABLE `user` ADD COLUMN `username` VARCHAR(255) NOT NULL;
