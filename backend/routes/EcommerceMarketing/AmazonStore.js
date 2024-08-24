// routes/amazonStoreRoutes.js
const express = require('express');
const router = express.Router();
const {
  createStoreContent,
  getAllStoreContent,
  getStoreContentById,
  updateStoreContent,
  deleteStoreContent
} = require('../../controllers/EcommerceMarketing/AmazonStore');

// Route to create new content
router.post('/', createStoreContent);

// Route to get all content
router.get('/', getAllStoreContent);

// Route to get content by ID
router.get('/:id', getStoreContentById);

// Route to update content by ID
router.put('/:id', updateStoreContent);

// Route to delete content by ID
router.delete('/:id', deleteStoreContent);

module.exports = router;
