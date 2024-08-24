const express = require('express');
const router = express.Router();
const manufacturingController = require('../../controllers/Industries/manufacturingController');

// Create new manufacturing data
router.post('/', manufacturingController.createManufacturing);

// Get all manufacturing data
router.get('/', manufacturingController.getAllManufacturing);

// Get single manufacturing data by ID
router.get('/:id', manufacturingController.getManufacturingById);

// Update manufacturing data
router.put('/:id', manufacturingController.updateManufacturing);

// Delete manufacturing data
router.delete('/:id', manufacturingController.deleteManufacturing);

module.exports = router;
