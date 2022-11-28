const express = require('express');
const router = express.Router();

router.post('/submission/', async (req, res, next) => {
    try {
        const result = await req.models.submission.add_submission(req.body);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Create submission - Failed:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/submission/', async (req, res, next) => {
    try {
        const result = await req.models.submission.getSubmissions();
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find user:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/submission/:submissionID', async (req, res, next) => {
    try {
        const result = await req.models.submission.findSubmission(req.params.submissionID);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find user:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.put('/submission/:submissionID', async (req, res, next) => {
    try {
        const result = await req.models.submission.updateSubmission(req.params.submissionID, req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to update submission:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.delete('/submission/:submissionID', async (req, res, next) => {
    try {
        const result = await req.models.submission.deleteSubmission(req.params.submissionID);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to delete submission:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;