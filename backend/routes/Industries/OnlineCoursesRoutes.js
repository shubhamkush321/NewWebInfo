const express = require('express');
const router = express.Router();
const onlineContentController = require('../../controllers/Industries/OnlineCoursesController');

// Create new content
router.post('/', onlineContentController.createContent);

// Get all content
router.get('/', onlineContentController.getAllContent);

// Get content by ID
router.get('/:id', onlineContentController.getContentById);

// Update content by ID
router.put('/:id', onlineContentController.updateContentById);

// Delete content by ID
router.delete('/:id', onlineContentController.deleteContentById);

module.exports = router;
