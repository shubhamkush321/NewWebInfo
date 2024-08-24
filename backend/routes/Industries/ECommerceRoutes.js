const express = require('express');
const router = express.Router();
const ECommerceController = require('../../controllers/Industries/ECommerceController');

// Create a new ECommerce document
router.post('/', ECommerceController.createECommerce);

// Read all ECommerce documents
router.get('/', ECommerceController.getAllECommerce);

// Read a single ECommerce document by ID
router.get('/:id', ECommerceController.getECommerceById);

// Update a single ECommerce document by ID
router.put('/:id', ECommerceController.updateECommerce);

// Delete a single ECommerce document by ID
router.delete('/:id', ECommerceController.deleteECommerce);

module.exports = router;
