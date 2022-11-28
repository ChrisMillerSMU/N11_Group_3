const router = require('express').Router();

router.post('/', async (req, res, next) => {
    try {
        const result = await req.models.company.addCompany(req.body);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to create company account:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/', async (req, res, next) => {
    try {
        const result = await req.models.company.getCompanies();
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find company:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/:email', async(req, res, next) => {
    try {
        const result = await req.models.company.findCompany(req.params.email);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find company:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.put('/:email', async (req, res, next) => {
    try {
        const result = await req.models.company.updateCompany(req.params.email, req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to update company:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;