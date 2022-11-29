var router = require("express").Router();
const controller = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/:isAthlete", async (req, res, next) => {
  try {
    const result = (req.params.isAthlete == 'true') ? 
    await controller.authenticateAthlete(req.body.email, req.body.password) : 
    await controller.authenticateCompany(req.body.email, req.body.password);
    if (result === null) {
      res.status(401).json({ message: "Invalid credentials" });
    } else {
      res.status(201).json(result);
    }
  } catch (err) {
    console.error("Failed to log in:", err);
    res.status(401).json({ message: err.toString() });
  }
  next();
});

module.exports = router;
