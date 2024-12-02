
const commentModel = require('../models/commentModel');

// get all comments
const getAllComments = (req, res) => {
    commentModel.getAllComments((err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// get all comments for a post
const getCommentsByPostId = (req, res) => {
    const { id } = req.params;
    commentModel.getCommentsByPostId(id, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send('Database query error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Comments not found');
            return;
        }
        res.json(results);
    });
};

// get all comments by member
const getCommentsByMember = (req, res) => {
    const { username } = req.params;
    commentModel.getCommentsByMember(username, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send('Database query error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Comments not found');
            return;
        }
        res.json(results);
    });
};

// create a new comment
const createComment = (req, res) => {
    const { memUsername, postID, title, body } = req.body;
    if (memUsername === undefined || postID === undefined || title === undefined || body === undefined) {
        res.status(400).send('Missing input');
        return;
    }
    commentModel.createComment(memUsername, postID, title, body, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// update comment title
const updateCommentTitle = (req, res) => {
    const { memUsername, postId, dateWritten } = req.params;
    const { title } = req.body;
    if (!title) {
        res.status(400).send('Title is required');
        return;
    }
    commentModel.updateCommentTitle(memUsername, postId, dateWritten, title, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
            res.json({ message: 'Comment updated successfully' });
        });
    };

// update comment body by composite pk
const updateCommentBody = (req, res) => {
    const { memUsername, postId, dateWritten } = req.params;
    const { body } = req.body;
    if (!body) {
        res.status(400).send('Comment body is required');
        return;
    }
    commentModel.updateCommentBody(memUsername, postId, dateWritten, body, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Comment updated successfully' });
    });
};

// delete comment by composite pk
const deleteComment = (req, res) => {
    const { memUsername, postId, dateWritten } = req.params;
    commentModel.deleteComment(memUsername, postId, dateWritten, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Comment deleted successfully' });
    });
};

module.exports = {
    getAllComments,
    getCommentsByPostId,
    getCommentsByMember,
    createComment,
    updateCommentTitle,
    updateCommentBody,
    deleteComment
};
