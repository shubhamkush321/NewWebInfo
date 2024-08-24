const express = require('express');
const router = express.Router();
const MagentoDevelopmentController = require('../../controllers/DesignDevelopment/MagentoDevelopment');

// Create a new MagentoDevelopment document
router.post('/', MagentoDevelopmentController.createMagentoDevelopment);

// Read all MagentoDevelopment documents
router.get('/', MagentoDevelopmentController.getAllMagentoDevelopment);

// Read a single MagentoDevelopment document by ID
router.get('/:id', MagentoDevelopmentController.getMagentoDevelopmentById);

// Update a single MagentoDevelopment document by ID
router.put('/:id', MagentoDevelopmentController.updateMagentoDevelopment);

// Delete a single MagentoDevelopment document by ID
router.delete('/:id', MagentoDevelopmentController.deleteMagentoDevelopment);

module.exports = router;
