// routes/electronicContentRoutes.js
const express = require('express');
const router = express.Router();
const electronicContentController = require('../../controllers/Industries/ElectronicController');

// Create new content
router.post('/', electronicContentController.createContent);

// Get all content
router.get('/', electronicContentController.getAllContent);

// Get content by ID
router.get('/:id', electronicContentController.getContentById);

// Update content by ID
router.put('/:id', electronicContentController.updateContentById);

// Delete content by ID
router.delete('/:id', electronicContentController.deleteContentById);

module.exports = router;
