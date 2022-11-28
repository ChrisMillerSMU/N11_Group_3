const router = require('express').Router();

router.post('/', async (req, res, next) => {
    try {
        const result = await req.models.athlete.addAthlete(req.body);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to create athlete account:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/', async (req, res, next) => {
    try {
        const result = await req.models.athlete.getAthletes();
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to get all athletes:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/:email', async(req, res, next) => {
    try {
        const result = await req.models.athlete.findAthlete(req.params.email);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find athlete:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.put('/:email', async (req, res, next) => {
    try {
        const result = await req.models.athlete.updateAthlete(req.params.email, req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to update athlete:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;