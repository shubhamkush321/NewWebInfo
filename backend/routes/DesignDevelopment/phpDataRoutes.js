const express = require('express');
const router = express.Router();
const PhpDevelopmentController = require('../../controllers/DesignDevelopment/phpDataController');

// Create a new PhpDevelopment document
router.post('/', PhpDevelopmentController.createPhpDevelopment);

// Read all PhpDevelopment documents
router.get('/', PhpDevelopmentController.getAllPhpDevelopment);

// Read a single PhpDevelopment document by ID
router.get('/:id', PhpDevelopmentController.getPhpDevelopmentById);

// Update a single PhpDevelopment document by ID
router.put('/:id', PhpDevelopmentController.updatePhpDevelopment);

// Delete a single PhpDevelopment document by ID
router.delete('/:id', PhpDevelopmentController.deletePhpDevelopment);

module.exports = router;
