const express = require('express');
const router = express.Router();
const designECommerceController = require('../../controllers/DesignDevelopment/EcommerceWebsite');

// Route to create or update DesignECommerce data
router.post('/', designECommerceController.createOrUpdateDesignECommerce);

// Route to get all DesignECommerce data
router.get('/', designECommerceController.getAllDesignECommerce);

// Route to get DesignECommerce data by ID
router.get('/:id', designECommerceController.getDesignECommerceById);

// Route to delete DesignECommerce data by ID
router.delete('/:id', designECommerceController.deleteDesignECommerceById);

module.exports = router;
