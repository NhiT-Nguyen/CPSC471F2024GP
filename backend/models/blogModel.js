const db = require('../config/db');

// get all blog posts
const getAllPosts = (callback) => {
    db.query('SELECT * FROM blog_post', callback);
}

// Get a single post by id
const getPostById = (id, callback) => {
    db.query('SELECT * FROM blog_post WHERE PostID = ?', [id], callback);
}

// Create a new post
const createPost = (title,body,authorID,adminFlag, callback) => {
    db.query('INSERT INTO blog_post (title, body, MemAuthUsername, adminPostFlag) VALUES (?, ?, ?,?)', [title, body, authorID,adminFlag], callback);
}

// Update blog post title
const updatePostTitle = (id, title, callback) => {
    db.query('UPDATE blog_post SET title = ? WHERE PostID = ?', [title, id], callback);
}

//Update blog post body
const updatePostBody = (id, body, callback) => {
    db.query('UPDATE blog_post SET body = ? WHERE PostID = ?', [body, id], callback);
}

// update blog post admin status
const updatePostAdminFlag = (id, adminFlag, callback) => {
    db.query('UPDATE blog_post SET adminPostFlag = ? WHERE PostID = ?', [adminFlag, id], callback);
}

// delete blog post
const deletePost = (id, callback) => {
    db.query('DELETE FROM blog_post WHERE PostID = ?', [id], callback);
}

// get images for a post
const getPostImages = (id, callback) => {
    db.query('SELECT * FROM blog_post_images WHERE PostID = ?', [id], callback);
}

// get image by id
const getImageById = (id, callback) => {
    db.query('SELECT ImageData FROM blog_post_images WHERE ImageID = ?', [id], callback);
}

// add image to post
const addImageToPost = (id, imageData, callback) => {
    db.query('INSERT INTO blog_post_images (PostID, ImageData) VALUES (?, ?)', [id, imageData], callback);
}

// delete image from post
const deleteImage = (id, callback) => {
    db.query('DELETE FROM blog_post_images WHERE ImageID = ?', [id], callback);
}

// delete all images from post
const deleteAllImages = (id, callback) => {
    db.query('DELETE FROM blog_post_images WHERE PostID = ?', [id], callback);
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