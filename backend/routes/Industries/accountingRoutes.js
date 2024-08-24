const express = require('express');
const router = express.Router();
const accountingContentController = require('../../controllers/Industries/AccountingController');

// Create new content
router.post('/', accountingContentController.createContent);

// Get all content
router.get('/', accountingContentController.getAllContent);

// Get content by ID
router.get('/:id', accountingContentController.getContentById);

// Update content by ID
router.put('/:id', accountingContentController.updateContentById);

// Delete content by ID
router.delete('/:id', accountingContentController.deleteContentById);

module.exports = router;
