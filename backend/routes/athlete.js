const router = require('express').Router();

router.post('/', async (req, res, next) => {
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

router.get('/', async (req, res, next) => {
    try {
        const result = await req.models.athlete.getAthletes();
        console.log(result)
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find user:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/:school/:jersey', async (req, res, next) => {
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

router.put('/:username', async (req, res, next) => {
    try {
        console.log("athlete route test", req.params.username, req.body);
        const result = await req.models.athlete.updateAthlete(req.params.username, req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to update:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;