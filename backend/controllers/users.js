const jwt = require('jsonwebtoken' );
const User = require('../models/users' );
const Athlete = require('../models/athletes' );
const Company = require('../models/companies' );

const accessTokenSecret = 'mysupercoolsecret' ; // more cryptographic key - environmental variable

const authenticateAthlete = async (email, password ) => {
    const user = await User.authenticateUser (email, password );
    if (user === null) {
        return user;
    }
    const students = await Athlete.findUserByEmail (email);
    console.log('Athletes' , athletes );
    const accessToken = jwt.sign({ ...athletes [0], claims: ['athlete' ] }, accessTokenSecret );
    
    return accessToken;
}
module.exports = {
    authenticateAthlete
};