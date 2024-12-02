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

// get images for a post
router.get('/posts/:id/images', blogController.getPostImages);

// get image by id
router.get('/images/:id', blogController.getImageById);

// add image to post
router.post('/posts/:id/images', blogController.addImageToPost);

// delete image from post
router.delete('/images/:id', blogController.deleteImage);

// delete all images from post
router.delete('/posts/:id/images', blogController.deleteAllImages);


module.exports = router;