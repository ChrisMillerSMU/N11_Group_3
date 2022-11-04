

CREATE DATABASE tv_advertisement;


CREATE TABLE athlete (
    school_name VARCHAR(255) DEFAULT 'School Name',
    jersey_number INT NOT NULL, 
    name VARCHAR(255) DEFAULT 'Athlete Name',
    height VARCHAR (50) NOT NULL,
    wingspan VARCHAR (50),
    gender VARCHAR (10), 
    sport VARCHAR (255) DEFAULT 'Some Sport',
    year INT, 
    stat VARCHAR (255),
    twitter VARCHAR (255), 
    instagram VARCHAR (255),
    email VARCHAR (255), password VARCHAR (255),
    PRIMARY KEY (school_name, jersey_number)
);

CREATE TABLE company (
    company_id INT NOT NULL, 
    name VARCHAR(255), 
    email VARCHAR (255),
    password VARCHAR (255),
    PRIMARY KEY (company_id)
);

CREATE TABLE submission ( 
    application_id INT NOT NULL AUTO_INCREMENT,
    company_id INT NOT NULL,
    athlete_school VARCHAR(255), athlete_num INT NOT NULL,
    is_accepted BOOLEAN, is_interested BOOLEAN,
    date_time DATETIME,
    PRIMARY KEY (application_id), 
    FOREIGN KEY (athlete_school, athlete_num) REFERENCES athlete(school_name,jersey_number),
    FOREIGN KEY (company_id) REFERENCES company(company_id)
);


CREATE TABLE endorsement ( 
    endorsementID INT NOT NULL, 
    company_id INT NOT NULL, 
    athlete_school VARCHAR(255), athlete_num INT NOT NULL,
    value INT, 
    date_time DATETIME,
    PRIMARY KEY (endorsementID),
    FOREIGN KEY (company_id) REFERENCES company(company_id),
    FOREIGN KEY (athlete_school, athlete_num) REFERENCES athlete(school_name, jersey_number)
);

CREATE TABLE post (
    company_id INT NOT NULL, 
    date_time DATETIME, 
    description VARCHAR(255), 
    is_accepted BOOLEAN,
    is_interested BOOLEAN, 
    post_timestamp DATETIME, 
    deadline DATETIME,
    PRIMARY KEY (company_id, date_time),
    FOREIGN KEY (company_id) REFERENCES company(company_id)
);

CREATE TABLE filter (
    filterID INT NOT NULL, 
    post_company INT NOT NULL, 
    post_timestamp DATETIME,
    sport VARCHAR(255), 
    year YEAR, 
    school VARCHAR(255),
    PRIMARY KEY (filterID, post_id), 
    FOREIGN KEY (post_company, post_timestamp) REFERENCES post(company_id, post_timestamp)
);







