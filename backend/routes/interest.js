const router = require('express').Router();

router.post('/', async (req, res, next) => {
    try {
        const result = await req.models.interest.addInterest(req.body);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to create interest account:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/', async (req, res, next) => {
    try {
        const result = await req.models.interest.getInterests();
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find interest:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/:interestID', async(req, res, next) => {
    try {
        const result = await req.models.interest.findInterest(req.params.interestID);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find interest:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.put('/:interestID', async (req, res, next) => {
    try {
        const result = await req.models.interest.updateInterest(req.params.interestID, req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to update interest:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;