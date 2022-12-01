const jwt = require("jsonwebtoken");
const Athlete = require("../models/athlete");
const Company = require("../models/company");
const connect = require("../models/database.js");

const token = "goldeneasteregg";

const authenticateAthlete = async (email, password) => {
  const { DBQuery, disconnect } = await connect();
  const u = new Athlete(DBQuery, disconnect);
  const user = await u.authenticate(email, password);
  if (user === false) {
    return null;
  }
  const users = await u.findAthlete(email);
  const accessToken = jwt.sign({ ...users[0] }, token);
  return accessToken;
};

const authenticateCompany = async (email, password) => {
  const { DBQuery, disconnect } = await connect();
  const c = new Company(DBQuery, disconnect);
  const user = await c.authenticate(email, password);
  if (user === false) {
    return null;
  }
  const users = await c.findCompany(email);
  const accessToken = jwt.sign({ ...users[0] }, token);

  return accessToken;
};

module.exports = {
  authenticateAthlete,
  authenticateCompany
};
