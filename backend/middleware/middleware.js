const connect = require('../models/database');

const athlete = require('../models/athlete');
const company = require('../models/company');
const endorsement = require('../models/endorsement');
const interest = require('../models/interest');
const post = require('../models/post');
const submission = require('../models/submission');


const create = async (req, res, next) => {
    const { DBQuery, disconnect } = await connect();
    req.models = {
        athlete: new athlete(DBQuery, disconnect),
        company: new company(DBQuery, disconnect),
        endorsement: new endorsement(DBQuery, disconnect),
        interest: new interest(DBQuery, disconnect),
        post: new post(DBQuery, disconnect),
        submission: new submission(DBQuery, disconnect)
    }
    req.disconnect = disconnect;
    next();
}

const disconnectMiddleware = (req, res, next) => {
    console.log('Disconnected');
    req.disconnect();
    next();
}

const request = (req, res, next) => {
    const url = req.protocol + "://" + req.get("host") + req.originalUrl;
    console.log(req.method, Date.now(), url);
    next();
}


module.exports = {
    create,
    disconnectMiddleware,
    request
}