// controllers/AmazonPostController.js
const AmazonPost = require('../../models/EcommerceMarketing/AmazonPost');

// Get all Amazon posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await AmazonPost.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await AmazonPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new posts
exports.createPosts = async (req, res) => {
  try {
    const posts = req.body; // Expecting an array of post objects
    const newPosts = await AmazonPost.insertMany(posts);
    res.status(201).json(newPosts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
  try {
    const post = await AmazonPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
  try {
    const post = await AmazonPost.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
