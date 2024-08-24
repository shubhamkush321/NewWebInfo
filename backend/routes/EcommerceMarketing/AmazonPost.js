const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPosts,
  updatePost,
  deletePost
} = require('../../controllers/EcommerceMarketing/AmazonPost');

// Route for getting all posts
router.get('/', getAllPosts);

// Route for getting a post by ID
router.get('/:id', getPostById);

// Route for creating new posts
router.post('/', createPosts);

// Route for updating a post
router.put('/:id', updatePost);

// Route for deleting a post
router.delete('/:id', deletePost);

module.exports = router;
