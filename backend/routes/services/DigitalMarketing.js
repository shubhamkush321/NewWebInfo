const express = require('express');
const router = express.Router();
const DigitalMarketingController = require('../../controllers/Services/DigitalMarketing');

// Get all Digital Marketing data
router.get('/', DigitalMarketingController.getAll);

// Create new Digital Marketing data
router.post('/', DigitalMarketingController.create);

// Update existing Digital Marketing data
router.put('/:id', DigitalMarketingController.update);

// Delete Digital Marketing data
router.delete('/:id', DigitalMarketingController.delete);

module.exports = router;
