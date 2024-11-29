const blogModel = require('../models/blogModel');

// get all blog posts
const getPosts = (req, res) => {
  blogModel.getAllPosts((err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
};

// Get a single post by id
const getPost = (req, res) => {
  const { id } = req.params;
  blogModel.getPostById(id, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Database query error');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Post not found');
      return;
    }
    res.json(results);
  });
};

// Create a new post
const createPost = (req, res) => {
  const { title, body, authorID, adminFlag } = req.body;
  if (title === undefined || body === undefined || authorID === undefined || adminFlag === undefined) {
    res.status(400).send('All input is required');
    return;
  }
  blogModel.createPost(title, body, authorID, adminFlag, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
};

// Update blog post title
const updatePostTitle = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  if (!title) {
    res.status(400).send('Title is required');
    return;
  }
  blogModel.updatePostTitle(id, title, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json({ message: 'Post updated successfully' });
  });
};

// Update blog post body
const updatePostBody = (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  if (!body) {
    res.status(400).send('Body is required');
    return;
  }
  blogModel.updatePostBody(id, body, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json({ message: 'Post updated successfully' });
  });
};

// Update blog post admin status
const updatePostAdminFlag = (req, res) => {
  const { id } = req.params;
  const { adminFlag } = req.body;
  if (adminFlag === undefined) {
    res.status(400).send('Admin flag is required');
    return;
  }
  blogModel.updatePostAdminFlag(id, adminFlag, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json({ message: 'Post updated successfully' });
  });
};

// Delete blog post
const deletePost = (req, res) => {
  const { id } = req.params;
  blogModel.deletePost(id, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json({ message: 'Post deleted successfully' });
  });
};

// get images for a post
const getPostImages = (req, res) => {
  const { id } = req.params;
  blogModel.getPostImages(id, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
};

// get image by id
const getImageById = (req, res) => {
  const { id } = req.params;
  blogModel.getImageById(id, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
};

// add image to post
const addImageToPost = (req, res) => {
  const { id } = req.params;
  const { imageData } = req.body;
  if (!imageData) {
    res.status(400).send('Image data is required');
    return;
  }
  blogModel.addImageToPost(id, imageData, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
};

// delete image from post
const deleteImage = (req, res) => {
  const { id } = req.params;
  blogModel.deleteImage(id, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json({ message: 'Image deleted successfully' });
  });
};

// delete all images from post
const deleteAllImages = (req, res) => {
  const { id } = req.params;
  blogModel.deleteAllImages(id, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json({ message: 'All images deleted successfully' });
  });
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePostTitle,
  updatePostBody,
  updatePostAdminFlag,
  deletePost,
};