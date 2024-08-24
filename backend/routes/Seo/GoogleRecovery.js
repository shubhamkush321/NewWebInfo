const express = require('express');
const router = express.Router();
const contentController = require('../../controllers/Seo/GoogleRecovery');

// Create new content
router.post('/', contentController.createContent);

// Get all content
router.get('/', contentController.getContent);

// Get content by ID
router.get('/:id', contentController.getContentById);

// Update content by ID
router.put('/:id', contentController.updateContent);

// Delete content by ID
router.delete('/:id', contentController.deleteContent);

module.exports = router;
