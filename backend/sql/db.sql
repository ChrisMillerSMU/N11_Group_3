

CREATE DATABASE tv_advertisement;

USE tv_advertisement;

CREATE TABLE athlete(
    email VARCHAR(255),
    school_name VARCHAR(255) DEFAULT 'School Name',
    name VARCHAR(255) DEFAULT 'Athlete Name',
    height VARCHAR (50) NOT NULL,
    wingspan VARCHAR (50),
    gender VARCHAR (10),
    sport VARCHAR (255) DEFAULT 'Some Sport',
    year INT,
    stat VARCHAR (255),
    twitter VARCHAR (255),
    instagram VARCHAR (255),
    password VARCHAR (255),
    PRIMARY KEY (email)
);

CREATE TABLE company(
    email VARCHAR(255),
    name VARCHAR(255),
    password VARCHAR (255),
    PRIMARY KEY (email)
);

CREATE TABLE submission( 
    application_id INT NOT NULL AUTO_INCREMENT,
    company VARCHAR(255),
    athlete VARCHAR(255),
    is_accepted BOOLEAN,
    is_interested BOOLEAN,
    date_time DATETIME,
    PRIMARY KEY (application_id),
    FOREIGN KEY (athlete) REFERENCES athlete(email),
    FOREIGN KEY (company) REFERENCES company(email)
);


CREATE TABLE endorsement (
    endorsementID INT NOT NULL AUTO_INCREMENT,
    company VARCHAR(255),
    athlete VARCHAR(255),
    value INT,
    date_time DATETIME,
    PRIMARY KEY (endorsementID),
    FOREIGN KEY (athlete) REFERENCES athlete(email),
    FOREIGN KEY (company) REFERENCES company(email)
);

CREATE TABLE post (
    postID INT NOT NULL AUTO_INCREMENT,
    company VARCHAR(255),
    date_time DATETIME,
    description VARCHAR(255),
    is_accepted BOOLEAN,
    is_interested BOOLEAN,
    PRIMARY KEY (postID),
    FOREIGN KEY (company) REFERENCES company(email)
);

CREATE TABLE filter (
    filterID INT NOT NULL AUTO_INCREMENT,
    postID INT NOT NULL,
    sport VARCHAR(255),
    year YEAR,
    school VARCHAR(255),
    PRIMARY KEY (filterID), 
    FOREIGN KEY (postID) REFERENCES post(postID)
);

SHOW TABLES;
