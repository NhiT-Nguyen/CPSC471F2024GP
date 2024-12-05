const reviewModel = require('../models/reviewModel');

// Get all reviews
const getAllReviews = (req, res) => {
    reviewModel.getAllReviews((err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// Get reviews by date
const getReviewsByDate = (req, res) => {
    const { date } = req.params;
    reviewModel.getReviewsByDate(date, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('No reviews found for the given date');
            return;
        }
        res.json(results);
    });
};

// Get reviews by member
const getReviewsByMember = (req, res) => {
    const { memUsername } = req.params;
    reviewModel.getReviewsByMember(memUsername, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('No reviews found for the given member');
            return;
        }
        res.json(results);
    });
};

// Get reviews by item
const getReviewsByItem = (req, res) => {
    const { itemId } = req.params;
    reviewModel.getReviewsByItem(itemId, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('No reviews found for the given item');
            return;
        }
        res.json(results);
    });
};

// Create a new review
const createReview = (req, res) => {
    const { memUsername, itemId, title, body, rating } = req.body;
    if (!memUsername || !itemId || !body || !rating) {
        res.status(400).send('Missing required fields: memUsername, itemId, body, rating');
        return;
    }
    reviewModel.createReview(memUsername, itemId, title, body, rating, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.status(201).json({ message: 'Review created successfully' });
    });
};

// Update review body
const updateReviewBody = (req, res) => {
    const { memUsername, itemId, datewritten } = req.params;
    const { body } = req.body;
    if (!body) {
        res.status(400).send('Review body is required');
        return;
    }
    reviewModel.updateReviewBody(memUsername, itemId, body, datewritten, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Review body updated successfully' });
    });
};

// Update review rating
const updateReviewRating = (req, res) => {
    const { memUsername, itemId, datewritten } = req.params;
    const { rating } = req.body;
    if (rating === undefined) {
        res.status(400).send('Review rating is required');
        return;
    }
    reviewModel.updateReviewRating(memUsername, itemId, rating, datewritten, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Review rating updated successfully' });
    });
};

// Delete review
const deleteReview = (req, res) => {
    const { memUsername, itemId, datewritten } = req.params;
    reviewModel.deleteReview(memUsername, itemId, datewritten, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Review deleted successfully' });
    });
};

module.exports = {
    getAllReviews,
    getReviewsByDate,
    getReviewsByMember,
    getReviewsByItem,
    createReview,
    updateReviewBody,
    updateReviewRating,
    deleteReview,
};
