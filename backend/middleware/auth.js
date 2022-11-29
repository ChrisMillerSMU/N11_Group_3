const jwt = require("jsonwebtoken");

const accessTokenSecret = 'goldeneasteregg';

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(" ")[1];
  console.log(token);
  jwt.verify(token, accessTokenSecret, (err, user) => {
    console.log(user);
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};


module.exports = { authenticateJWT }; 