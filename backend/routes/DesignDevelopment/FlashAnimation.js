// routes/flashAnimation.js
const express = require('express');
const router = express.Router();
const flashAnimationController = require('../../controllers/DesignDevelopment/FlashAnimation');

// Create a new section
router.post('/', flashAnimationController.createSection);

// Get all sections
router.get('/', flashAnimationController.getAllSections);

// Get a section by ID
router.get('/:id', flashAnimationController.getSectionById);

// Update a section
router.put('/:id', flashAnimationController.updateSection);

// Delete a section
router.delete('/:id', flashAnimationController.deleteSection);

module.exports = router;
