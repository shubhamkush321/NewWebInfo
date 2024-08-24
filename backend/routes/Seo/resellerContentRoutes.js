const express = require('express');
const router = express.Router();
const resellerContentController = require('../../controllers/Seo/ResellerContentController');

// Create a new content entry
router.post('/', resellerContentController.createContent);

// Get all content entries
router.get('/', resellerContentController.getAllContent);

// Get a single content entry by ID
router.get('/:id', resellerContentController.getContentById);

// Update a content entry by ID
router.put('/:id', resellerContentController.updateContent);

// Delete a content entry by ID
router.delete('/:id', resellerContentController.deleteContent);

module.exports = router;
