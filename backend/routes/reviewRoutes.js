const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

// get all reviews
router.get('/reviews', reviewController.getAllReviews);

// get review by date
router.get('/reviews/date/:date', reviewController.getReviewsByDate);

// get review by username
router.get('/reviews/username/:memUsername', reviewController.getReviewsByMember);

// get review by item
router.get('/reviews/item/:itemId', reviewController.getReviewsByItem);

// create a new review
router.post('/reviews', reviewController.createReview);

// update review body
router.put('/reviews/body/:memUsername/:itemId/:datewritten', reviewController.updateReviewBody);

// update review rating
router.put('/reviews/rating/:memUsername/:itemId/:datewritten', reviewController.updateReviewRating);

// delete review
router.delete('/reviews/:memUsername/:itemId/:datewritten', reviewController.deleteReview);

module.exports = router;

