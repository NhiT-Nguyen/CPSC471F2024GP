const db = require('./config/db');

// get all blog posts
const getAllPosts = (callback) => {
    db.query('SELECT * FROM blog_posts', callback);
}

// Get a single post by id
const getPostById = (id, callback) => {
    db.query('SELECT * FROM blog_posts WHERE id = ?', [id], callback);
}

// Create a new post
const createPost = (title,body,authorID,adminFlag, callback) => {
    db.query('INSERT INTO blog_posts (title, body, author_id, adminFlag) VALUES (?, ?, ?,?)', [title, body, authorID,adminFlag], callback);
}

// Update blog post title
const updatePostTitle = (id, title, callback) => {
    db.query('UPDATE blog_posts SET title = ? WHERE id = ?', [title, id], callback);
}

//Update blog post body
const updatePostBody = (id, body, callback) => {
    db.query('UPDATE blog_posts SET body = ? WHERE id = ?', [body, id], callback);
}

// update blog post admin status
const updatePostAdminFlag = (id, adminFlag, callback) => {
    db.query('UPDATE blog_posts SET adminFlag = ? WHERE id = ?', [adminFlag, id], callback);
}

// delete blog post
const deletePost = (id, callback) => {
    db.query('DELETE FROM blog_posts WHERE id = ?', [id], callback);
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePostTitle,
    updatePostBody,
    updatePostAdminFlag,
    deletePost
};