const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

// get all comments
router.get('/comments', commentController.getAllComments);

// get all comments for a post
router.get('/comments/:id', commentController.getCommentsByPostId);

// get all comments by member
router.get('/comments/member/:username', commentController.getCommentsByMember);

// create a new comment
router.post('/comments', commentController.createComment);

// update comment title
//router.put('/comments/:id/title', commentController.updateCommentTitle);
router.put('/comments/:memUsername/:postId/:dateWritten/title', commentController.updateCommentTitle);

// update comment body
//router.put('/comments/:id/body', commentController.updateCommentBody);
router.put('/comments/:memUsername/:postId/:dateWritten/body', commentController.updateCommentBody);

// delete comment
router.delete('/comments/:memUsername/:postID/:dateWritten', commentController.deleteComment);

module.exports = router;