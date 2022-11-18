

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

CREATE TABLE interest(
    interestID INT NOT NULL AUTO_INCREMENT,
    athlete VARCHAR(255),
    company VARCHAR(255),
    mutual int,
    name VARCHAR(255),
    PRIMARY KEY (interestID),
    FOREIGN KEY (athlete) REFERENCES athlete(email),
    FOREIGN KEY (company) REFERENCES company(email)
);

CREATE TABLE post (
    postID INT NOT NULL AUTO_INCREMENT,
    company VARCHAR(255),
    date_time DATETIME,
    description VARCHAR(255),
    PRIMARY KEY (postID),
    FOREIGN KEY (company) REFERENCES company(email)
);

CREATE TABLE submission(
    submissionID INT NOT NULL AUTO_INCREMENT,
    post VARCHAR(255),
    athlete VARCHAR(255),
    date_time DATETIME,
    PRIMARY KEY (submissionID),
    FOREIGN KEY (athlete) REFERENCES athlete(email),
    FOREIGN KEY (post) REFERENCES post(postID)
);


CREATE TABLE endorsement (
    endorsementID INT NOT NULL AUTO_INCREMENT,
    submission VARCHAR(255),
    date_time DATETIME,
    PRIMARY KEY (endorsementID),
    FOREIGN KEY (submission) REFERENCES submission(submissionID)
);

SHOW TABLES;

INSERT INTO athlete VALUES ('test@test.com', 'test', 'test', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', 'test');
