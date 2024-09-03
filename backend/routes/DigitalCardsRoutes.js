const express = require('express');
const router = express.Router();
const imageController = require('../controllers/DigitalCardsController');

// Get all images
router.get('/', imageController.getAllImages);

// Get a single image by ID
router.get('/:id', imageController.getImageById);

// Create a new image
router.post('/', imageController.createImage);

// Update an existing image
router.put('/:id', imageController.updateImage);

// Delete an image
router.delete('/:id', imageController.deleteImage);

module.exports = router;
