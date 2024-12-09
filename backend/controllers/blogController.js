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

// add post location
const addPostLocation = (req, res) => {
  const { postID, locationID } = req.body;
  if (!postID || !locationID) {
    res.status(400).send('PostID and LocationID are required');
    return;
  }
  blogModel.addPostLocation(postID, locationID, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
};

// update post location
const updatePostLocation = (req, res) => {
  const { postID, locationID } = req.body;
  if (!postID || !locationID) {
    res.status(400).send('PostID and LocationID are required');
    return;
  }
  blogModel.updatePostLocation(postID, locationID, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
};

// delete post location
const deletePostLocation = (req, res) => {
  const { postID } = req.body;
  if (!postID) {
    res.status(400).send('PostID is required');
    return;
  }
  blogModel.deletePostLocation(postID, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
};

const addFishNameToPost = (req, res) => {
  const { postID, fishName } = req.body;
  if (!postID || !fishName) {
    res.status(400).send('PostID and FishName are required');
    return;
  }
  blogModel.addFishNameToPost(postID, fishName, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
};

const updateFishName = (req, res) => {
  const { postID, fishName } = req.body;
  if (!postID || !fishName) {
    res.status(400).send('PostID and FishName are required');
    return;
  }
  blogModel.updateFishName(postID, fishName, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
}

const getFishName = (req, res) => {
  const { postID } = req.params;
  blogModel.getFishName(postID, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
}

const deleteAllFishName  = (req, res) => {
  const { postID } = req.params;
  blogModel.deleteAllFishName(postID, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
}

const deleteFishName = (req, res) => {
  const { postID, fishName } = req.body;
  if (!postID || !fishName) {
    res.status(400).send('PostID and FishName are required');
    return;
  }
  blogModel.deleteFishName(postID, fishName, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
}

const addAdminToPost = (req, res) => {
  const { postID, adminUser } = req.body;
  if (!postID || !adminUser) {
    res.status(400).send('PostID and Admin Username are required');
    return;
  }
  blogModel.addAdminToPost(postID, adminUser, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
}

const getAdminsForPost = (req, res) => {
  const { postID } = req.params;
  blogModel.getAdminsForPost(postID, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
}

const deleteAdminFromPost = (req, res) => {
  const { postID, adminUser } = req.body;
  if (!postID || !adminUser) {
    res.status(400).send('PostID and Admin Username are required');
    return;
  }
  blogModel.deleteAdminFromPost(postID, adminUser, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
}

const deleteAllAdminsFromPost = (req, res) => {
  const { postID } = req.params;
  blogModel.deleteAllAdminsFromPost(postID, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
}

const addGearToPost = (req, res) => {
  const { postID, gearID } = req.body;
  if (!postID || !gearID) {
    res.status(400).send('PostID and GearID are required');
    return;
  }
  blogModel.addGearToPost(postID, gearID, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
}

const getGearForPost = (req, res) => {
  const { postID } = req.params;
  blogModel.getGearForPost(postID, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
}

const deleteGearFromPost = (req, res) => {
  const { postID, gearID } = req.body;
  if (!postID || !gearID) {
    res.status(400).send('PostID and GearID are required');
    return;
  }
  blogModel.deleteGearFromPost(postID, gearID, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
}

const deleteAllGearFromPost = (req, res) => {
  const { postID } = req.params;
  blogModel.deleteAllGearFromPost(postID, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
}

module.exports = {
  getPosts,
  getPost,
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