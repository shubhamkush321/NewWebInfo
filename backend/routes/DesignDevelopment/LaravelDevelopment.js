const express = require('express');
const router = express.Router();
const LaravelController = require('../../controllers/DesignDevelopment/LaravelDevelopment');

// Create a new Laravel document
router.post('/', LaravelController.createLaravel);

// Read all Laravel documents
router.get('/', LaravelController.getAllLaravel);

// Read a single Laravel document by ID
router.get('/:id', LaravelController.getLaravelById);

// Update a single Laravel document by ID
router.put('/:id', LaravelController.updateLaravel);

// Delete a single Laravel document by ID
router.delete('/:id', LaravelController.deleteLaravel);

module.exports = router;
