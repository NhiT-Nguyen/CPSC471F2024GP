const db = require('../config/db');
const utils = require('../db/dbUtils');
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

// Blog location
const addPostLocation = (postID, locationID, callback) => { 
    db.query('INSERT INTO took_place_at (PostID, LocationID) VALUES (?, ?)', [postID, locationID], callback);
}

// update post location
const updatePostLocation = (postID, locationID, callback) => {
    db.query('UPDATE took_place_at SET LocationID = ? WHERE PostID = ?', [locationID, postID], callback);
}

// delete post location
const deletePostLocation = (postID, callback) => {
    db.query('DELETE FROM took_place_at WHERE PostID = ?', [postID], callback);
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

const addFishNameToPost = (postID, fishName, callback) => {
    db.query('INSERT INTO about (PostID, FishScienceName) VALUES (?, ?)', [postID, fishName], callback);
}

const updateFishName = (postID, fishName, callback) => {
    db.query('UPDATE about SET FishScienceName = ? WHERE PostID = ?', [fishName, postID], callback);
}
// get fish name by post id
const getFishName = (postID, callback) => {
    db.query('SELECT FishScienceName FROM about WHERE PostID = ?', [postID], callback);
}
// delete all fish name from post
const deleteAllFishName = (postID, callback) => {
    db.query('DELETE FROM about WHERE PostID = ?', [postID], callback);
}

// delete specific fish name from post
const deleteFishName = (postID, fishName, callback) => {
    db.query('DELETE FROM about WHERE PostID = ? AND FishScienceName = ?', [postID, fishName], callback);
}

// associate post with admins
const addAdminToPost = (postID, adminUser, callback) => {
    db.query('INSERT INTO written_by_admin (PostID, AUsername) VALUES (?, ?)', [postID, adminUser], callback);
}

// get all admins for a post
const getAdminsForPost = (postID, callback) => {
    db.query('SELECT AUsername FROM written_by_admin WHERE PostID = ?', [postID], callback);
}

// delete admin from post
const deleteAdminFromPost = (postID, adminUser, callback) => {
    db.query('DELETE FROM written_by_admin WHERE PostID = ? AND AUsername = ?', [postID, adminUser], callback);
}

// delete all admins from post
const deleteAllAdminsFromPost = (postID, callback) => {
    db.query('DELETE FROM written_by_admin WHERE PostID = ?', [postID], callback);
}

// add gear to mentioned_in table
const addGearToPost = (postID, gearID, callback) => {
    // check if post exists
    utils.doesPostExist(postID, (err, exists) => {
        if (err) {
            return callback(err, null);
        }

        if (!exists) {
            return callback(new Error('Post does not exist'), null);
        }

        // check if gear exists
        utils.doesGearExist(gearID, (err, exists) => {
            if (err) {
                return callback(err, null);
            }

            if (!exists) {
                return callback(new Error('Gear does not exist'), null);
            }

            db.query('INSERT INTO mentioned_in (PostID, ItemID) VALUES (?, ?)', [postID, gearID], callback);
        });
    });
}

// get gear for a post
const getGearForPost = (postID, callback) => {
    db.query('SELECT ItemID FROM mentioned_in WHERE PostID = ?', [postID], callback);
}

// delete gear from post
const deleteGearFromPost = (postID, gearID, callback) => {
    db.query('DELETE FROM mentioned_in WHERE PostID = ? AND ItemID = ?', [postID, gearID], callback);
}

// delete all gear from post
const deleteAllGearFromPost = (postID, callback) => {
    db.query('DELETE FROM mentioned_in WHERE PostID = ?', [postID], callback);
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePostTitle,
    updatePostBody,
    updatePostAdminFlag,
    deletePost,
    getPostImages,
    getImageById,
    addImageToPost,
    deleteImage,
    deleteAllImages,
    addPostLocation,
    updatePostLocation,
    deletePostLocation,
    addFishNameToPost,
    updateFishName,
    getFishName,
    deleteAllFishName,
    deleteFishName,
    addAdminToPost,
    getAdminsForPost,
    deleteAdminFromPost,
    deleteAllAdminsFromPost,
    addGearToPost,
    getGearForPost,
    deleteGearFromPost,
    deleteAllGearFromPost
};