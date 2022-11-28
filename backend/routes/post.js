const express = require('express');
const router = express.Router();

router.post('/post/', async (req, res, next) => {
    try {
        const result = await req.models.post.add_post(req.body);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Create post - Failed:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/post/', async (req, res, next) => {
    try {
        const result = await req.models.post.getPosts();
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find posts:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/post/:postID', async (req, res, next) => {
    try {
        const result = await req.models.post.findPost(req.params.postID);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find post:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.put('/post/:postID', async (req, res, next) => {
    try {
        const result = await req.models.user.updateUserData(req.params.postID, req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to update post:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;