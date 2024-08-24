const express = require('express');
const router = express.Router();
const eCommerceController = require('../../controllers/DesignDevelopment/eCommerceController');

// Route to create or update eCommerce data
router.post('/', eCommerceController.createOrUpdateECommerce);

// Route to get all eCommerce data
router.get('/', eCommerceController.getAllECommerce);

// Route to get eCommerce data by ID (optional)
router.get('/:id', eCommerceController.getECommerceById);

// Route to delete eCommerce data by ID (optional)
router.delete('/:id', eCommerceController.deleteECommerceById);

module.exports = router;
