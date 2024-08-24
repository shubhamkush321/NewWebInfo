// routes/lawFirmContent.js
const express = require('express');
const router = express.Router();
const lawFirmContentController = require('../../controllers/Industries/lawFirmContentController');

// Create new content
router.post('/', lawFirmContentController.createContent);

// Get all content
router.get('/', lawFirmContentController.getAllContent);

// Get content by ID
router.get('/:id', lawFirmContentController.getContentById);

// Update content by ID
router.put('/:id', lawFirmContentController.updateContentById);

// Delete content by ID
router.delete('/:id', lawFirmContentController.deleteContentById);

module.exports = router;
