const express = require('express');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const result = await req.models.post.createPost(req.body);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Create post - Failed:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.get('/', async (req, res, next) => {
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

router.get('/:postID', async (req, res, next) => {
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

router.get('/by/:email', async (req, res, next) => {
    try {
        const result = await req.models.post.findPostByEmail(req.params.email);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Failed to find post:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.put('/:postID', async (req, res, next) => {
    try {
        const result = await req.models.post.updatePost(req.params.postID, req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to update post:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.delete('/:postID', async (req, res, next) => {
    try {
        const result = await req.models.post.deletePost(req.params.postID);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to delete post:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;