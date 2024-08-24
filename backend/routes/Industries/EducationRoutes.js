const express = require('express');
const router = express.Router();
const educationalContentController = require('../../controllers/Industries/EducationController');

// Create new content
router.post('/', educationalContentController.createContent);

// Get all content
router.get('/', educationalContentController.getAllContent);

// Get content by ID
router.get('/:id', educationalContentController.getContentById);

// Update content by ID
router.put('/:id', educationalContentController.updateContentById);

// Delete content by ID
router.delete('/:id', educationalContentController.deleteContentById);

module.exports = router;
