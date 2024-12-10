const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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
router.post('/posts/:id/images', upload.single('image'), blogController.addImageToPost);

// delete image from post
router.delete('/images/:id', blogController.deleteImage);

// delete all images from post
router.delete('/posts/:id/images', blogController.deleteAllImages);

// add post location
router.post('/posts/location', blogController.addPostLocation);

// update post location
router.put('/posts/location', blogController.updatePostLocation);

// delete post location
router.delete('/posts/location', blogController.deletePostLocation);

// get admins for post
router.get('/posts/:postID/admins', blogController.getAdminsForPost);

// add admin to post
router.post('/posts/admin', blogController.addAdminToPost);

// delete admin from post
router.delete('/posts/admin', blogController.deleteAdminFromPost);

// delete all admins from post
router.delete('/posts/:postID/admins', blogController.deleteAllAdminsFromPost);

// add fish name to post
router.post('/posts/fish', blogController.addFishNameToPost);

// update fish name
router.put('/posts/fish', blogController.updateFishName);

// getFishName
router.get('/posts/:postID/fish', blogController.getFishName);

// deleteAllFishName
router.delete('/posts/:postID/fish', blogController.deleteAllFishName);

//delete fish name
router.delete('/posts/:postID/fish/:fishName', blogController.deleteFishName);

// add gear to post
router.post('/posts/gear', blogController.addGearToPost);

// get gear for post
router.get('/posts/:postID/gear', blogController.getGearForPost);

// delete gear from post
router.delete('/posts/:postID/gear/:gearID', blogController.deleteGearFromPost);

// delete all gear from post
router.delete('/posts/:postID/gear', blogController.deleteAllGearFromPost);


module.exports = router;