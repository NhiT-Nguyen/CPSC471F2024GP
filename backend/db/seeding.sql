drop database fishingblog471;
create DATABASE fishingblog471;
USE fishingblog471;



CREATE TABLE MEMBER(
MUsername		VARCHAR(20)		NOT NULL,
MEmail			VARCHAR(20)		NOT NULL,
MPassword		VARCHAR(20)		NOT NULL,
UserDescription		VARCHAR(200)	,
JoinDate		DATETIME			NOT NULL,
PRIMARY KEY (MEmail),
UNIQUE (MUsername)
);

CREATE TABLE ADMIN(
AUsername		VARCHAR(20)		NOT NULL,
AEmail			VARCHAR(20)		NOT NULL,
APassword		VARCHAR(20)		NOT NULL,
PRIMARY KEY (AEmail),
UNIQUE (AUsername)
);

CREATE TABLE FISH(
ScientificName		VARCHAR(50)		NOT NULL,
Size			VARCHAR(10)		,
Description		TEXT	NOT NULL,
FreshOrSaltwater	VARCHAR(10)			NOT NULL,
Weight			VARCHAR(10)		,
PRIMARY KEY (ScientificName)
);

CREATE TABLE FISH_COMMON_NAMES(
FScientificName		VARCHAR(50)		NOT NULL,
CommonName		VARCHAR(50)		NOT NULL,
PRIMARY KEY (CommonName),
FOREIGN KEY (FScientificName) REFERENCES FISH (ScientificName)
);

CREATE TABLE FISH_SUITABLE_LURES(
FScientificName		VARCHAR(50)		NOT NULL,
LureType		VARCHAR(50)		NOT NULL,
	PRIMARY KEY (LureType),
FOREIGN KEY (FScientificName) REFERENCES FISH (ScientificName)
);

CREATE TABLE FISHING_LOCATION (
Name			VARCHAR(50)		NOT NULL,
Country		VARCHAR(50)		NOT NULL,
PRIMARY KEY (Name)
);

CREATE TABLE FISHING_TYPES_LOC (
LocName		VARCHAR(50)		NOT NULL,
FishingType		VARCHAR(30)		NOT NULL,
PRIMARY KEY (Locname, FishingType),
FOREIGN KEY (LocName) REFERENCES FISHING_LOCATION (Name)
);

CREATE TABLE FISHING_GEAR (
ItemID			INT		AUTO_INCREMENT	NOT NULL,
QuantityInStock	INT			NOT NULL,
Description		VARCHAR(300)	,
StockStatus		VARCHAR(20)		NOT NULL,
Discount		INT			,
Price			FLOAT			NOT NULL,
PRIMARY KEY (ItemID)
);

CREATE TABLE FISHING_TYPES_GEAR (
ItemID			INT			NOT NULL,
FishingType		VARCHAR(255)		NOT NULL,
PRIMARY KEY (ItemID, FishingType),
FOREIGN Key (ItemID) REFERENCES FISHING_GEAR (ItemID)
);


CREATE TABLE BLOG_POST(
PostID			INT		AUTO_INCREMENT	NOT NULL,
Title			VARCHAR(255)		NOT NULL,
Body			TEXT 	NOT NULL,
MemAuthUsername	VARCHAR(20)		,
AdminPostFlag		INT			NOT NULL,
PRIMARY KEY (PostID),
FOREIGN KEY (MemAuthUsername) REFERENCES MEMBER (MUsername)
);

CREATE TABLE BLOG_POST_IMAGES (
	PostID			INT			NOT NULL,
	ImageID		INT	AUTO INCREMENT NOT NULL,
    ImageData LONGBLOB NOT NULL,
PRIMARY KEY (ImageID),
FOREIGN KEY (PostID) REFERENCES BLOG_POST (PostID)
);

CREATE TABLE COMMENT (
  MemUsername VARCHAR(20) NOT NULL,
  PostID INT NOT NULL,
  DateWritten DATETIME NOT NULL,
  Title VARCHAR(20),
  Body TEXT NOT NULL,
  PRIMARY KEY (MemUsername, PostID, DateWritten),
  FOREIGN KEY (MemUsername) REFERENCES MEMBER (MUsername),
  FOREIGN KEY (PostID) REFERENCES BLOG_POST (PostID)
);

CREATE TABLE REVIEW (
MemUsername		VARCHAR(20)		NOT NULL,
ItemID			INT			NOT NULL,
DateWritten		DATETIME			NOT NULL,
Title			VARCHAR(20)		,
Body			TEXT	NOT NULL,
Rating			INT			NOT NULL,
PRIMARY KEY (DateWritten,MemUsername,ItemID),
FOREIGN KEY (ItemID) REFERENCES FISHING_GEAR (ItemID),
FOREIGN KEY (MemUsername) REFERENCES MEMBER (MUsername)
);

CREATE TABLE CART (
CartID			INT			NOT NULL,
CartStatus		VARCHAR(20)		NOT NULL,
CreationDate		DATE			NOT NULL,
MemUsername		VARCHAR(20)		NOT NULL,
PRIMARY KEY (CartID),
FOREIGN KEY (MemUsername) REFERENCES MEMBER (MUsername)
);

CREATE TABLE TRANSACTION (
TransactionID		INT			NOT NULL,
CartID			INT			NOT NULL,
MemUsername		VARCHAR(20)		NOT NULL,
Status			VARCHAR(20)		NOT NULL,
CardNum		VARCHAR(16)		NOT NULL,
CardExpDate		VARCHAR(4)		NOT NULL,
CVNum		VARCHAR(3)		NOT NULL,
Amount		FLOAT			NOT NULL,
Date			DATE			NOT NULL,
PRIMARY KEY (TransactionID),
FOREIGN KEY (CartID) REFERENCES CART (CartID),
FOREIGN KEY (MemUsername) REFERENCES MEMBER (MUsername)
);

CREATE TABLE `ORDER` (
OrderID		INT			NOT NULL,
TransactionID		INT			NOT NULL,
ShippingAddress	VARCHAR(50)		NOT NULL,
Date			DATE			NOT NULL,
Status			VARCHAR(20)		NOT NULL,
PRIMARY KEY (OrderID),
FOREIGN KEY (TransactionID) REFERENCES TRANSACTION (TransactionID)
);

CREATE TABLE ORDER_DETAILS (
OrderID		INT			NOT NULL,
ItemID			INT			NOT NULL,
Quantity		INT			NOT NULL,
FOREIGN KEY (OrderID) REFERENCES `ORDER` (OrderID),
FOREIGN KEY (ItemID) REFERENCES FISHING_GEAR (ItemID)
);

CREATE TABLE TOOK_PLACE_AT (
PostID			INT			NOT NULL,
LocationID		VARCHAR(50)		NOT NULL,
FOREIGN KEY (PostID) REFERENCES BLOG_POST (PostID),
FOREIGN KEY (LocationID) REFERENCES FISHING_LOCATION (Name)
);

CREATE TABLE ABOUT (
PostID			INT			NOT NULL,
FishScienceName	VARCHAR(50)		NOT NULL,
FOREIGN KEY (PostID) REFERENCES BLOG_POST (PostID),
FOREIGN KEY (FishScienceName) REFERENCES FISH (ScientificName)
);

CREATE TABLE WRITTEN_BY_ADMIN (
PostID			INT			NOT NULL,
AUsername		VARCHAR(20)		NOT NULL,
FOREIGN KEY (PostID) REFERENCES BLOG_POST (PostID),
FOREIGN KEY (AUsername) REFERENCES ADMIN (AUsername)
);

CREATE TABLE MENTIONED_IN (
PostID			INT			NOT NULL,
ItemID			INT 			NOT NULL,
FOREIGN KEY (PostID) REFERENCES BLOG_POST (PostID),
FOREIGN KEY (ItemID) REFERENCES FISHING_GEAR (ItemID)
);

CREATE TABLE PLACED_IN(
CartID			INT			NOT NULL,
ItemID			INT 			NOT NULL,
Quantity		INT			NOT NULL,
FOREIGN KEY (CartID) REFERENCES CART(CartID),
FOREIGN KEY (ItemID) REFERENCES FISHING_GEAR (ItemID)
);

CREATE TABLE SOURCED_BY(
AUsername		VARCHAR(20)		NOT NULL,
ItemID			INT 			NOT NULL,
FOREIGN KEY (AUsername) REFERENCES ADMIN (AUsername),
FOREIGN KEY (ItemID) REFERENCES FISHING_GEAR (ItemID)
);


-- Insert into MEMBERS
INSERT INTO MEMBER
VALUES
('user1', 'user1@email.com', 'password1', 'First User', '2021-03-21 11:36:14'),
('user2', 'user2@email.com', 'password2', 'Second User', '2021-04-21 11:46:14'),
('user3', 'user3@email.com', 'password3', 'Third User', '2021-05-21 11:56:14');

-- Insert into ADMIN
INSERT INTO ADMIN
VALUES
('admin1', 'admin1@email.com', 'apassword1'),
('admin2', 'admin2@email.com', 'apassword2'),
('admin3', 'admin3@email.com', 'apassword3');

-- Insert into FISH
INSERT INTO FISH
VALUES
('Oncorhynchus mykiss', NULL, 
'This trout is an olive-green colour with heavy black spotting over the length of the body. The adult fish has a red-coloured stripe along the lateral line, from the gills to the tail. Rainbow trout in lakes are usually lighter coloured or a more silvery colour than those in streams', 
'Freshwater', NULL),
('Sander vitreus', NULL, 
'Named for their big eyes, walleye are the largest members of the perch family. Two distinct fins are present on the back, the first featuring large spines. Dusky vertical bars are often found on the body. Other distinctive characteristics for these fish include: A yellow-olive back Brassy, silvery sides with yellow spots A white underside White on the lower lobe of the tail', 
'Freshwater', NULL),
('Sander canadensis', NULL, 
'Sauger are golden olive on the back, with silver-yellow sides and a white underside. As a member of the perch family, they also have a large spiny dorsal fin. Other distinguishing characteristics include: distinct rows of spots on the dorsal fins three or four dusky vertical bars, or saddles, on the body', 
'Freshwater', NULL);

-- Insert into FISH_COMMON_NAMES
INSERT INTO FISH_COMMON_NAMES
VALUES
('Oncorhynchus mykiss', 'Rainbow Trout'),
('Sander vitreus', 'Walleye'),
('Sander canadensis', 'Sauger');

-- Insert into FISH_SUITABLE_LURES
INSERT INTO FISH_SUITABLE_LURES
VALUES
('Oncorhynchus mykiss', 'Leeches, shrimp'),
('Sander vitreus', 'Minnows, snails'),
('Sander canadensis', 'Leeches, insects');

-- Insert into FISHING_LOCATION
INSERT INTO FISHING_LOCATION
VALUES
('Cold Lake', 'Canada'),
('Lac La Biche', 'Canada'),
('Lake Minnewanka', 'Canada');

-- Insert into FISHING_TYPES_LOC
INSERT INTO FISHING_TYPES_LOC
VALUES
('Cold Lake', 'Angling'),
('Lac La Biche', 'Angling, fly fishing'),
('Lake Minnewanka', 'Angling');

-- Insert into FISHING_GEAR
INSERT INTO FISHING_GEAR
VALUES
(1, 10, 'Fishing Rod', 'In Stock', 0, 70),
(2, 10, 'Fishing Hat', 'In Stock', 0, 20),
(3, 10, 'Fishing Line', 'In Stock', 0, 10),
(4, 10, 'Beginner’s Guide to Fishing', 'In Stock', 0, 35),
(5, 10, 'Beginner Angler Kit', 'In Stock', 0, 120);

-- Insert into FISHING_TYPES_GEAR
INSERT INTO FISHING_TYPES_GEAR
VALUES
(1, 'Angling'),
(3, 'Angling, fly fishing, ice fishing'),
(5, 'Angling');

-- Insert into BLOG_POST
INSERT INTO BLOG_POST
VALUES
(1, 'Introduction to Angling', 'Lorem ipsum dolor sit amet...', 'user1', 0),
(2, 'Introduction to Fly Fishing', 'Lorem ipsum dolor sit amet...', 'user1', 0),
(3, 'Fishing Etiquette', 'Lorem ipsum dolor sit amet...', NULL, 1),
(4, 'Water Safety for the Novice Fisherman', 'Lorem ipsum dolor sit amet...', NULL, 1),
(5, 'What No One Tells You About Fishing', 'Lorem ipsum dolor sit amet...', 'user3', 0);

-- Insert into COMMENT
INSERT INTO COMMENT
VALUES
('user2', 1, '2021-03-28 11:46:14', NULL, 'Loved it! Very helpful article.'),
('user2', 3, '2021-04-28 11:46:14', NULL, 'I wish I could send this to every jerk I see clogging up a waterway with their ego. Phew! This should be required reading for new fishermen.'),
('user1', 5, '2021-06-28 11:46:14', 'THIS POST IS LAW', 'It’s true. It happened to my uncle, and we never heard from him again. Mama, don’t let your sons grow up to be fishermen.');

-- Insert into REVIEW
INSERT INTO REVIEW
VALUES
('user2', 5, '2021-03-28 11:46:14', NULL, 'I didn’t know where to start, but this kit had everything I could imagine and more! Will be buying three more and bringing my buddies next time.', 5),
('user2', 2, '2021-07-28 11:46:14', NULL, 'I embroidered the classic women fear me, fish love me onto mine, made it so much more interesting.', 4),
('user1', 5, '2023-07-28 11:46:14', 'RUN FOR IT', 'THE BEES, NOT THE BEES! OH GOD NOT THE BEES', 5);

-- Insert into TOOK_PLACE_AT
INSERT INTO TOOK_PLACE_AT
VALUES
(5, 'Lake Minnewanka');

-- Insert into ABOUT
INSERT INTO ABOUT
VALUES
(5, 'Sander canadensis'),
(5, 'Sander vitreus'),
(5, 'Oncorhynchus mykiss');

-- Insert into WRITTEN_BY_ADMIN
INSERT INTO WRITTEN_BY_ADMIN
VALUES
(3, 'admin1'),
(4, 'admin1');

-- Insert into MENTIONED_IN
INSERT INTO MENTIONED_IN
VALUES
(1, 1),
(1, 4),
(1, 5),
(5, 2),
(5, 3);

-- Insert into SOURCED_BY
INSERT INTO SOURCED_BY
VALUES
('admin1', 1),
('admin1', 2),
('admin1', 3),
('admin1', 4),
('admin1', 5);




