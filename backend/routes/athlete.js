const router = require('express').Router();

router.post('/athlete/', async(req, res, next) => {
    try {
        const result = await req.models.athlete.add_athlete(req.body);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Create account - Failed:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/', async(req, res, next) => {
    try {
        const result = await req.models.athlete.getAthletes();
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find user:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/athlete/:school/:jersey', async(req, res, next) => {
    try {
        const result = await req.models.athlete.getAthlete(req.params.school, req.params.jersey);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find user:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.put('/athlete/:username', async (req, res, next) => {
    try {
        const user = req.params.username;
        const body = req.body;
        const result = await req.models.athlete.updateUserData(user, body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to update:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
  });
  
  module.exports = router;