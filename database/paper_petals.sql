CREATE DATABASE IF NOT EXISTS paper_petals;

USE paper_petals;
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE admin (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);





CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,

    category_id INT NOT NULL,

    product_name VARCHAR(150) NOT NULL,

    brand VARCHAR(100),

    description TEXT,

    price DECIMAL(10,2) NOT NULL,

    discount DECIMAL(5,2) DEFAULT 0,

    rating DECIMAL(2,1) DEFAULT 5.0,

    stock INT DEFAULT 0,

    image VARCHAR(255),

    features TEXT,

    FOREIGN KEY (category_id)
        REFERENCES categories(category_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

CREATE TABLE cart (

    cart_id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    product_id INT NOT NULL,

    quantity INT DEFAULT 1,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    FOREIGN KEY (product_id)
        REFERENCES products(product_id)
        ON DELETE CASCADE
);

CREATE TABLE wishlist (

    wishlist_id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    product_id INT NOT NULL,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    FOREIGN KEY (product_id)
        REFERENCES products(product_id)
        ON DELETE CASCADE
);

CREATE TABLE orders (

    order_id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    total_amount DECIMAL(10,2),

    order_status VARCHAR(30) DEFAULT 'Pending',

    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

CREATE TABLE order_items (

    order_item_id INT AUTO_INCREMENT PRIMARY KEY,

    order_id INT NOT NULL,

    product_id INT NOT NULL,

    quantity INT,

    price DECIMAL(10,2),

    FOREIGN KEY (order_id)
        REFERENCES orders(order_id)
        ON DELETE CASCADE,

    FOREIGN KEY (product_id)
        REFERENCES products(product_id)
        ON DELETE CASCADE
);






INSERT INTO categories (category_name) VALUES
('Journals'),
('Notebooks'),
('Gel Pens'),
('Brush Pens'),
('Stickers'),
('Sticky Notes'),
('Washi Tape'),
('Planners'),
('Pencil Cases'),
('Desk Organizers'),
('Gift Boxes');


INSERT INTO admin(username,password)
VALUES
('admin','admin123');


INSERT INTO products
(category_id, product_name, brand, description, price, discount, rating, stock, image, features)
VALUES
(1,'Blossom Floral Journal','Paper Petals','Hardcover floral journal with 200 ruled pages.',499.00,10.00,4.8,40,'journal1.jpg','Hardcover, Elastic Band, Bookmark Ribbon'),

(1,'Moonlight Bullet Journal','Paper Petals','Minimal dotted journal for planning and sketching.',599.00,5.00,4.9,25,'journal2.jpg','120 GSM Paper, Dot Grid'),

(2,'Pastel Dreams Notebook','Pastel Co.','Soft pastel notebook with premium pages.',299.00,15.00,4.7,60,'notebook1.jpg','A5 Size, 160 Pages'),

(2,'Cloud Notes Notebook','Paper Petals','Lightweight notebook for daily writing.',249.00,0.00,4.5,75,'notebook2.jpg','College Ruled'),

(3,'Sakura Gel Pen Set','ColorBloom','Pack of 10 smooth gel pens.',349.00,12.00,4.9,80,'gelpen1.jpg','10 Colors, Quick Dry'),

(3,'Galaxy Glitter Gel Pens','SparkWrite','Glitter ink pen set.',399.00,10.00,4.8,55,'gelpen2.jpg','Metallic Ink'),

(4,'Watercolor Brush Pens','ArtLeaf','Professional brush pen set.',899.00,20.00,4.9,30,'brush1.jpg','24 Colors'),

(4,'Pastel Brush Marker Set','ColorBloom','Soft pastel brush markers.',799.00,15.00,4.8,35,'brush2.jpg','Dual Tip'),

(5,'Cute Animal Stickers','Happy Prints','Vinyl sticker collection.',199.00,5.00,4.7,100,'sticker1.jpg','Waterproof'),

(5,'Vintage Floral Stickers','Paper Petals','Decorative floral stickers.',249.00,10.00,4.8,90,'sticker2.jpg','Matte Finish'),

(6,'Rainbow Sticky Notes','MemoJoy','Colorful sticky notes pack.',149.00,0.00,4.6,120,'sticky1.jpg','400 Sheets'),

(6,'Heart Sticky Notes','Paper Petals','Heart-shaped sticky notes.',179.00,5.00,4.7,85,'sticky2.jpg','Self Adhesive'),

(7,'Pastel Washi Tape Set','TapeCraft','Decorative washi tape collection.',299.00,8.00,4.8,70,'washi1.jpg','10 Rolls'),

(7,'Galaxy Washi Tape','TapeCraft','Galaxy-themed washi tape.',249.00,5.00,4.7,65,'washi2.jpg','5 Rolls'),

(8,'2026 Daily Planner','OrganizeMe','Daily productivity planner.',699.00,10.00,4.9,40,'planner1.jpg','Undated'),

(8,'admincartcartadminWeekly Planner','Paper Petals','Weekly planning notebook.',549.00,10.00,4.8,45,'planner2.jpg','52 Weeks'),

(9,'Canvas Pencil Case','CarryArt','Premium zip pencil pouch.',399.00,10.00,4.8,50,'case1.jpg','Water Resistant'),

(9,'Transparent Pencil Pouch','CarryArt','Clear stationery pouch.',249.00,0.00,4.6,60,'case2.jpg','PVC Material'),

(10,'Wooden Desk Organizer','DeskNest','Multi-compartment wooden organizer.',999.00,15.00,4.9,20,'desk1.jpg','Eco-friendly Wood'),

(11,'Gift Box Stationery Hamper','Paper Petals','Curated stationery gift box.',1499.00,10.00,5.0,15,'gift1.jpg','Notebook, Pens, Stickers');

SELECT COUNT(*) AS category_count FROM categories;
SELECT COUNT(*) AS product_count FROM products;
SELECT * FROM admin;
