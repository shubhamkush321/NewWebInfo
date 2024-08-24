const express = require('express');
const router = express.Router();
const technicalContentController = require('../../controllers/Seo/TechnicalContentController');

// Create new content
router.post('/', technicalContentController.createContent);

// Get all content
router.get('/', technicalContentController.getAllContent);

// Get content by ID
router.get('/:id', technicalContentController.getContentById);

// Update content by ID
router.put('/:id', technicalContentController.updateContent);

// Delete content by ID
router.delete('/:id', technicalContentController.deleteContent);

module.exports = router;
