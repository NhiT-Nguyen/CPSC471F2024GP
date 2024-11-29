const db = require('../config/db');

// get all comments
const getAllComments = (callback) => {
    db.query('SELECT * FROM comment', callback);
}

// get all comments for a post
const getCommentsByPostId = (id, callback) => {
    db.query('SELECT * FROM comment WHERE PostID = ?', [id], callback);
}

// get comment by member
const getCommentsByMember = (username, callback) => {
    db.query('SELECT * FROM comment WHERE MemUsername = ?', [username], callback);
}

const createComment = (memUsername,postID,title,body, callback) => {
    const dateWritten = new Date(); // current date and time
    db.query(
        'INSERT INTO COMMENT (MemUsername, PostID, DateWritten, Title, Body) VALUES (?, ?, ?, ?, ?)',
        [memUsername, postID, dateWritten, title, body],
        callback
    );
}

// update comment title
// based on composite pk of memUsername, postID, dateWritten
const updateCommentTitle = (id, title, callback) => {
    db.query('UPDATE comment SET Title = ? WHERE MemUsername = ? AND PostID = ? AND DateWritten = ?', [title, id], callback);
}

// update comment body
const updateCommentBody = (id, body, callback) => {
    db.query('UPDATE comment SET Body = ? WHERE MemUsername = ? AND PostID = ? AND DateWritten = ?', [body, id], callback);
}

// delete comment
const deleteComment = (memUsername, postID, dateWritten, callback) => {
    db.query('DELETE FROM comment WHERE MemUsername = ? AND PostID = ? AND DateWritten = ?', [memUsername, postID, dateWritten], callback);
}

module.exports = {
    getAllComments,
    getCommentsByPostId,
    getCommentsByMember,
    createComment,
    updateCommentTitle,
    updateCommentBody,
    deleteComment
};