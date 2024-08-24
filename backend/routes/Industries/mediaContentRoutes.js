const express = require('express');
const router = express.Router();
const mediaContentController = require('../../controllers/Industries/MediaContentController');

// Create new content
router.post('/', mediaContentController.createContent);

// Get all content
router.get('/', mediaContentController.getAllContent);

// Get content by ID
router.get('/:id', mediaContentController.getContentById);

// Update content by ID
router.put('/:id', mediaContentController.updateContentById);

// Delete content by ID
router.delete('/:id', mediaContentController.deleteContentById);

module.exports = router;
