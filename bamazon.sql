CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
	item_id integer(30) AUTO_INCREMENT,
    product_name varchar(30),
    department_name varchar(30),
    PTC integer(100),
    stock_quantity integer(100),
    PRIMARY KEY(item_id)
);

USE Bamazon;

INSERT INTO products (product_name, department_name, PTC, stock_quantity)
VALUES ("Daily Stoic", "Books", 15, 80);

use Bamazon;
SELECT * FROM products;