const express = require('express');
const router = express.Router();

router.post('/company/', async(req, res, next) => {
    try {
        const result = await req.models.company.add_company(req.body);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Create account - Failed:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/company/', async(req, res, next) => {
    try {
        const result = await req.models.athlete.getCompanies();
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
        const result = await req.models.user.updateUserData(user, body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to update:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
  });
  
  module.exports = router;