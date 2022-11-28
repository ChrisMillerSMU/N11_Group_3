const express = require('express');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const result = await req.models.submission.addSubmission(req.body);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Create submission - Failed:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/', async (req, res, next) => {
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

router.get('/:submissionID', async (req, res, next) => {
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

router.get('/ID/:postID', async (req, res, next) => {
    try {
        const result = await req.models.submission.findSubmissionByPost(req.params.postID);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find submissions for post:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.delete('/:submissionID', async (req, res, next) => {
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