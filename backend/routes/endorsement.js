const router = require('express').Router();

router.post('/', async (req, res, next) => {
    try {
        const result = await req.models.endorsement.addEndorsement(req.body);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to create endorsement account:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/', async (req, res, next) => {
    try {
        const result = await req.models.endorsement.getCompanies();
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find endorsement:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/:email', async(req, res, next) => {
    try {
        const result = await req.models.endorsement.findEndorsement(req.params.email);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find endorsement:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.put('/:email', async (req, res, next) => {
    try {
        const result = await req.models.endorsement.updateEndorsement(req.params.email, req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to update endorsement:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;