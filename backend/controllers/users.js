const jwt = require('jsonwebtoken' );
const User = require('../models/users' );
const Athlete = require('../models/athletes' );
const Company = require('../models/companies' );

const accessTokenSecret = 'key' ;

const authenticateAthlete = async (email, password ) => {
    const user = await User.authenticateUser (email, password );
    if (user === null) {
        return user;
    }
<<<<<<< Updated upstream
    const students = await Athlete.findUserByEmail (email);
    console.log('Athletes' , athletes );
    const accessToken = jwt.sign({ ...athletes [0], claims: ['athlete' ] }, accessTokenSecret );
=======
    const athletes = await Athlete.findUserByEmail (email);
    console.log('Athletes' , athletes );
    const accessToken = jwt.sign({ ...athletes [0], claims: ['athlete'] }, accessTokenSecret );
    
    return accessToken;
}
const authenticateCompany = async (email, password ) => {
    const user = await User.authenticateUser (email, password );
    if (user === null) {
        return user;
    }
    const companies = await Company.findUserByEmail (email);
    console.log('Companies' , companies );
    const accessToken = jwt.sign({ ...companies [0], claims: ['company' ] }, accessTokenSecret );
>>>>>>> Stashed changes
    
    return accessToken;
}
module.exports = {
<<<<<<< Updated upstream
    authenticateAthlete
=======
    authenticateAthlete,
    authenticateCompany
>>>>>>> Stashed changes
};