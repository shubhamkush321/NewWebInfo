// routes/webDesigningRoutes.js
const express = require('express');
const router = express.Router();
const webDesigningController = require('../../controllers/Services/WebDesign');

// Create a new WebDesigning document
router.post('/', webDesigningController.createWebDesigning);

// Get all WebDesigning documents
router.get('/', webDesigningController.getAllWebDesignings);

// Get a single WebDesigning document by ID
router.get('/:id', webDesigningController.getWebDesigningById);

// Update a WebDesigning document by ID
router.put('/:id', webDesigningController.updateWebDesigning);

// Delete a WebDesigning document by ID
router.delete('/:id', webDesigningController.deleteWebDesigning);

module.exports = router;
