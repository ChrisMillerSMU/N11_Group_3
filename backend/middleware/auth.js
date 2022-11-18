const jwt = require('jsonwebtoken');
const User = require('../models/user');
const connectToDatabase = require('../models/database-helpers.js');
const Athlete = require('../models/athlete');

const accessTokenSecret = 'goldeneasteregg';

const authenticate = async (username, password, isAthlete) => {
    const { DBQuery, disconnect } = await connectToDatabase();
    const temp = type ? new Athlete(email, password) : new company(email, password);
    const user = await temp.authenticateUser(username, password, isAthlete);
    if (user === false) {
        return null;
    }
    const users = await u.findUserByUsername(username);
    const accessToken = jwt.sign({ ...users[0]}, accessTokenSecret);

    return accessToken;
}

module.exports = {
    authenticate
};