const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

// get all blog posts
router.get('/posts', blogController.getPosts);

// get a single post by id
router.get('/posts/:id', blogController.getPost);

// create a new post
router.post('/posts', blogController.createPost);

// update blog post title
router.put('/posts/:id/title', blogController.updatePostTitle);

// update blog post body
router.put('/posts/:id/body', blogController.updatePostBody);

// update blog post admin status
router.put('/posts/:id/admin', blogController.updatePostAdminFlag);

// delete blog post
router.delete('/posts/:id', blogController.deletePost);

module.exports = router;