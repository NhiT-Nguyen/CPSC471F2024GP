/*
CREATE TABLE REVIEW (
MemUsername		VARCHAR(20)		NOT NULL,
ItemID			INT			NOT NULL,
DateWritten		DATETIME			NOT NULL,
Title			VARCHAR(20)		,
Body			TEXT	NOT NULL,
Rating			INT			NOT NULL,
PRIMARY KEY (DateWritten,MemUsername,ItemID),
FOREIGN KEY (ItemID) REFERENCES FISHING_GEAR (ItemID),
FOREIGN KEY (MemUsername) REFERENCES MEMBER (MUsername)
);
*/

const db = require('../config/db');

// get all reviews
const getAllReviews = (callback) => {
    db.query('SELECT * FROM review', callback);
};

// get reviews by date
const getReviewsByDate = (date, callback) => {
    db.query('SELECT * FROM review WHERE DateWritten = ?', [date], callback);
};

// get reviews by member
const getReviewsByMember = (memUsername, callback) => {
    db.query('SELECT * FROM review WHERE MemUsername = ?', [memUsername], callback);
};

// get reviews by item
const getReviewsByItem = (itemId, callback) => {
    db.query('SELECT * FROM review WHERE ItemID = ?', [itemId], callback);
};

// create a new review
const createReview = (memUsername, itemId, title, body, rating, callback) => {
    db.query(
        'INSERT INTO review (MemUsername, ItemID, DateWritten, Title, Body, Rating) VALUES (?, ?, ?, ?, ?, ?)',
        [memUsername, itemId, new Date(), title, body, rating],
        callback
    );
};

// update review body
const updateReviewBody = (memUsername, itemId, body, datewritten, callback) => {
    db.query('UPDATE review SET Body = ? WHERE MemUsername = ? AND ItemID = ? AND DateWritten = ?', [body, memUsername, itemId,datewritten], callback);
};

// update review rating
const updateReviewRating = (memUsername, itemId, rating, datewritten, callback) => {
    db.query('UPDATE review SET Rating = ? WHERE MemUsername = ? AND ItemID = ? AND DateWritten = ?', [rating, memUsername, itemId,datewritten], callback);
};

// delete review
const deleteReview = (memUsername, itemId, datewritten, callback) => {
    db.query('DELETE FROM review WHERE MemUsername = ? AND ItemID = ? AND DateWritten = ?', [memUsername, itemId,datewritten], callback);
};

module.exports = {
    getAllReviews,
    getReviewsByDate,
    getReviewsByMember,
    getReviewsByItem,
    createReview,
    updateReviewBody,
    updateReviewRating,
    deleteReview
};