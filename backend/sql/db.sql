

CREATE DATABASE N11_G3;

USE N11_G3;

CREATE TABLE athlete(
    email varchar(255) DEFAULT '',
    school_name varchar(255)DEFAULT 'School Name',
    name varchar(255)DEFAULT 'Athlete Name',
    height varchar(50) DEFAULT '',
    wingspan varchar(50) DEFAULT '',
    gender varchar(10) DEFAULT '',
    sport varchar(255)DEFAULT 'Some Sport',
    year INT DEFAULT 0,
    stat varchar(255) DEFAULT '',
    twitter varchar(255) DEFAULT '',
    instagram varchar(255) DEFAULT '',
    password varchar(255) DEFAULT '',

    PRIMARY KEY (email)
);

CREATE TABLE company(
    email varchar(255) DEFAULT '',
    name varchar(255) DEFAULT '',
    password varchar(255) DEFAULT '',
    PRIMARY KEY (email)
);

CREATE TABLE interest(
    interestID INT NOT NULL AUTO_INCREMENT,
    athlete varchar(255),
    company varchar(255),
    mutual int DEFAULT,
    PRIMARY KEY (interestID),
    FOREIGN KEY (athlete) REFERENCES athlete(email),
    FOREIGN KEY (company) REFERENCES company(email)
);

CREATE TABLE post (
    postID INT NOT NULL AUTO_INCREMENT,
    company varchar(255),
    date_time DATETIME,
    description varchar(255) DEFAULT '',
    PRIMARY KEY (postID),
    FOREIGN KEY (company) REFERENCES company(email)
);

CREATE TABLE submission(
    submissionID INT NOT NULL AUTO_INCREMENT,
    post INT,
    athlete varchar(255),
    date_time DATETIME,
    PRIMARY KEY (submissionID),
    FOREIGN KEY (athlete) REFERENCES athlete(email),
    FOREIGN KEY (post) REFERENCES post(postID)
);


CREATE TABLE endorsement (
    endorsementID INT NOT NULL AUTO_INCREMENT,
    submission INT,
    date_time DATETIME,
    PRIMARY KEY (endorsementID),
    FOREIGN KEY (submission) REFERENCES submission(submissionID)
);

SHOW TABLES;



email varchar(255) DEFAULT '',
    school_name varchar(255)DEFAULT 'School Name',
    name varchar(255)DEFAULT 'Athlete Name',
    height varchar(50) DEFAULT '',
    wingspan varchar(50) DEFAULT '',
    gender varchar(10) DEFAULT '',
    sport varchar(255)DEFAULT 'Some Sport',
    year INT DEFAULT 0,
    stat varchar(255) DEFAULT '',
    twitter varchar(255) DEFAULT '',
    instagram varchar(255) DEFAULT '',
    password varchar(255) DEFAULT '',
INSERT INTO athlete VALUES 
('arodgers@ucb.edu', 'UC Berkeley', 'Aaron Rodgers', '6''2"', '6''4.75"', 'Male', 'Football', 3, '4000 passing yards in the last season', '@aaronrodgers', '@aaronrodgers', 'gofootball'),
('rasheer@smu.edu', 'SMU', 'Rashee Rice', '6''1"', '5''11"', 'Male', 'Football', 4, '1500 receiving yards in the last season', '@rasheerice', '@rasheerice', 'ponyup'),
('')

;

INSERT INTO company VALUES ('test@test.com', 'test', 'test');
