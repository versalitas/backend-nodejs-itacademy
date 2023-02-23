DROP DATABASE IF EXISTS bottle_bottom ;
CREATE DATABASE  bottle_bottom ;
USE  bottle_bottom ;


CREATE TABLE IF NOT EXISTS supplier (
    supplier_id INT UNSIGNED AUTO_INCREMENT NOT NULL ,
    supplier_name  VARCHAR(45) NOT NULL,
    street_name  VARCHAR(45) NOT NULL,
    street_number  SMALLINT UNSIGNED NOT NULL,
    address_floor VARCHAR(20) DEFAULT NULL,
    apartment SMALLINT UNSIGNED DEFAULT NULL,
    city VARCHAR(85) NOT NULL,
    zip_code SMALLINT UNSIGNED NOT NULL,
    phone_number  VARCHAR(20) NOT NULL,
    fax  VARCHAR(20) NOT NULL, 
    vatNum VARCHAR(11) NOT NULL,
    PRIMARY KEY(supplier_id)
);


CREATE TABLE IF NOT EXISTS brand (
    brand_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    brand_name VARCHAR(45) UNIQUE NOT NULL,
    supplier_id INT UNSIGNED NOT NULL,
	PRIMARY KEY (brand_id),
    FOREIGN KEY (supplier_id) REFERENCES supplier (supplier_id)
);


CREATE TABLE IF NOT EXISTS glasses (
    glasses_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
	prescription_right DECIMAL(6.2) NOT NULL,
    prescription_left DECIMAL(6.2) NOT NULL,
	frame_type ENUM ('wraparound', 'acetate', 'wireframe') NOT NULL,
    frame_color VARCHAR(20) NOT NULL,
    price DECIMAL(6.2) NOT NULL,
    glass_color  VARCHAR(20) NOT NULL,
    brand_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (glasses_id),
    FOREIGN KEY (brand_id) REFERENCES brand (brand_id)
);


CREATE TABLE IF NOT EXISTS client_data (
    client_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    client_name  VARCHAR(45) NOT NULL,
    street_name  VARCHAR(45) NOT NULL,
    street_number  SMALLINT UNSIGNED NOT NULL,
    address_floor  VARCHAR(20) DEFAULT NULL,
    apartment TINYINT UNSIGNED DEFAULT NULL,
    city VARCHAR(85) NOT NULL,
    zip_code SMALLINT UNSIGNED NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    mail VARCHAR(345) NOT NULL,
    sign_up_date DATE NOT NULL,
    recommended_by INT UNSIGNED DEFAULT NULL,
    PRIMARY KEY ( client_id),
    FOREIGN KEY (recommended_by) REFERENCES client_data (client_id)
 );
 

CREATE TABLE IF NOT EXISTS employee (
    employee_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    employee_name VARCHAR(45) NOT NULL,
    PRIMARY KEY (employee_id)
);


CREATE TABLE IF NOT EXISTS sale (
    sale_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    invoice_date DATE NOT NULL,
    glasses_id INT UNSIGNED NOT NULL,
    client_id INT UNSIGNED NOT NULL,
    employee_id INT UNSIGNED NOT NULL,
    quantity TINYINT NOT NULL,
    total_price DECIMAL(6,2) NOT NULL,
    PRIMARY KEY(sale_id),
    FOREIGN KEY (employee_id) REFERENCES employee (employee_id),
    FOREIGN KEY (client_id) REFERENCES client_data (client_id),
    FOREIGN KEY (glasses_id) REFERENCES glasses (glasses_id)
);
--
-- INSERTING DATA
--
INSERT INTO supplier (supplier_id, supplier_name , street_name, street_number , address_floor, apartment, city, zip_code,
    phone_number, fax, vatNum )
VALUES (1, 'Gafasa', 'Avinguda Francesc Tarradellas', 34, '2', 1, 'Barcelona', 08022, 934567898, 934567897, '1948504793H'), 
(2, 'Tot Ulleres', 'Avinguda Francesc Cambó', 17, 'entresol', 3, 'Barcelona', 08003, 93489898, 93956789, '3748504793B'), 
(3, 'Cool specs', 'Pl Francesc Macià', 5, 'baixos', 3, 'Barcelona', 08022, 93890098, 93890099, '8056704793D'),
(4, 'Hoteyes', 'Carrer del Pi', 6, 'baixos', 3, 'Barcelona', 08022, 93690098, 96890099, '7056704793D'),
(5, 'Hoot goggles', 'Carrer de Santa Ana', 7, 'baixos', 3, 'Barcelona', 08022, 93690098, 96890099, '7056704793D'),
(6, 'lambda gafas', 'Carrer del pilar', 7, 'entresol', 3, 'Barcelona', 08022, 93690098, 96890099, '7056704793D');

INSERT INTO brand (brand_id, brand_name,supplier_id)
VALUES (1, 'Lamy', 2), (2, 'Aristar', 2), (3, 'Persol', 3), 
(4, 'RayBan', 2),  (5, 'Skaga', 1),  (6, 'Prada', 2),
(7, 'Dior', 6), (8, 'Cross', 4);

INSERT INTO glasses (glasses_id, prescription_right, prescription_left, frame_type, frame_color, price, glass_color, brand_id)
VALUES (1, 6.7, 5.7, 'wraparound', 'jetblack',  89, 'hazy blue', 1), (2, 1.5, 2.5, 'wireframe', 'true steel', 199, 'transparent', 2), 
(3, 11.5, 12.5, 'acetate', 'tortoise', 109.08, 'transparent', 1), (4, 0.5, 0.5, 'acetate', 'hot pink', 67.06, 'transparent', 3),
(5, 0.5, 0.5, 'acetate', 'hot pink', 67.06, 'transparent', 5) ,(6, 0.5, 0.5, 'acetate', 'hot pink', 67.06, 'transparent', 6),(7, 0.5, 0.5, 'wraparound', 'steel blue', 67.06, 'transparent', 4);


INSERT INTO client_data (client_id, client_name, street_name, street_number, address_floor, apartment, city, zip_code, phone_number, mail, sign_up_date, recommended_by)
VALUES (1,'Alene Smith','Pacocha Inlet',6,'43',8,'West Masonchester',40675,'09143076413','lesch.vivian@example.com','2005-02-02', 1), 
(2,'Doug Johnson','Sesame Street',6,'43',8,'Westham',23065,'09143076413','dougishere@example.com','2015-02-02', 1), 
(3,'Sammy Roth','Alamo Street',6,'33',8,'Charlotte',23065,'09143076413','sayHitoSammy@engine.com','2018-02-02', 2), 
(4,'Arabella Hayes','Mott street',6,'63',8,'New York',13065,'09167076413','dougishere@example.com','2015-02-02', 1)
 ;

INSERT INTO employee (employee_id, employee_name)
VALUE (1,'Eric Bruun'),(2,'Ruben Davis'),(3,'Cale Langworth IV'),(4,'Alanis Rath'),(5,'AnnaHammes'),(6,'Maiya Bogan'),(7,'Olaf Hammer');

INSERT INTO sale (sale_id, invoice_date, glasses_id, client_id, employee_id, quantity, total_price)
VALUES (1,'2018-12-08',4,1,4,4,119.9) ,
(2,'2003-07-30',1,1,2,1,229.9) ,
(3,'2019-01-17',1, 3,1,1,169.99),
(4,'2022-01-17',2, 3,2,3,369.99), 
(5,'2012-04-07',4, 4,2,1,169.99), 
(6,'2012-09-07',4, 2, 2,1,159.99), 
(7,'2022-04-17',4, 3, 1,1,199.99), 
(8,'2022-08-17',3, 3, 1,1,199.99), 
(9,'2022-05-17',3, 3, 1,1,139.99),
(10,'2022-06-18',3, 2, 1,1,89.99),
(11,'2022-11-22',1, 2, 2,1,69.99),
(12,'2022-01-17',6, 3, 1,1,59.99),
(13,'2022-01-17',5, 3, 1, 2, 59.99);


--
-- QUERIES
-- 
-- Llista el total de compres d'un client

SELECT * FROM sale
WHERE client_id = 3
ORDER BY invoice_date;


--  Llista les diferents ulleres que ha venut un empleat durant un any

SELECT glasses_id FROM sale
WHERE employee_id = 1
AND invoice_date
BETWEEN '2022-01-01'
AND '2022-12-31'
ORDER BY invoice_date; 

-- Llista els diferents proveïdors que han subministrat ulleres venudes amb èxit per l'òptica


SELECT supplier.supplier_name AS "Bestseller suppliers"
FROM supplier
INNER JOIN brand
ON supplier.supplier_id = brand.supplier_id
JOIN glasses ON brand.brand_id = glasses.brand_id
JOIN sale ON glasses.glasses_id = sale.glasses_id
GROUP BY supplier.supplier_name;

