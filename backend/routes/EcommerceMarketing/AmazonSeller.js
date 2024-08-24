const express = require('express');
const router = express.Router();
const {
  getAllContent,
  getContentById,
  createContent,
  updateContent,
  deleteContent
} = require('../../controllers/EcommerceMarketing/AmazonSeller');

// Route for getting all content
router.get('/', getAllContent);

// Route for getting content by ID
router.get('/:id', getContentById);

// Route for creating new content
router.post('/', createContent);

// Route for updating content
router.put('/:id', updateContent);

// Route for deleting content
router.delete('/:id', deleteContent);

module.exports = router;
