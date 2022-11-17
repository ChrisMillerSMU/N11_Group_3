var router = require('express').Router();
const controller = require("../controllers/user");
const auth = require("../middleware/auth");

/* GET users listing. */
// authenticate user
router.post('/', async (req, res, next) => {
  try {
      const result = await controller.authenticateUser(req.body.username, req.body.password);
      if (result === null) {
        res.status(401).json({message: "Invalid credentials"});
      } else {
        res.status(201).json(result);
      }
  } catch (err) {
      console.error('Failed to log in:', err);
      res.status(401).json({ message: err.toString() });
  }
  next();
});

router.get('/a/', auth.authenticateJWT, async (req, res, next) => {
  try {
    const result = await req.models.athlete.findAthlete(req.athlete.email);
    res.status(200).json(result);
  } catch (err) {
    console.error("Failed to get session:", err);
    res.status(500).json({message: err.toString()});
  }
  next();
});

router.get('/c/', auth.authenticateJWT, async (req, res, next) => {
    try {
      const result = await req.models.company.findCompany(req.company.email);
      res.status(200).json(result);
    } catch (err) {
      console.error("Failed to get session:", err);
      res.status(500).json({message: err.toString()});
    }
    next();
  });

module.exports = router;
