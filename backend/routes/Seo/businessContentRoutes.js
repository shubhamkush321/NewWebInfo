const express = require('express');
const router = express.Router();
const businessContentController = require('../../controllers/Seo/businessContentController');

// Create new content
router.post('/', businessContentController.createContent);

// Get all content
router.get('/', businessContentController.getContent);

// Get content by ID
router.get('/:id', businessContentController.getContentById);

// Update content by ID
router.put('/:id', businessContentController.updateContent);

// Delete content by ID
router.delete('/:id', businessContentController.deleteContent);

module.exports = router;
