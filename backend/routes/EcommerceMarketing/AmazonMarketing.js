// routes/advertiseRoutes.js
const express = require('express');
const router = express.Router();
const marketingController = require('../../controllers/EcommerceMarketing/AmazonMarketing');

router.get('/', marketingController.getAllContent);
router.get('/:id', marketingController.getContentById);
router.post('/', marketingController.createContent);
router.put('/:id', marketingController.updateContent);
router.delete('/:id', marketingController.deleteContent);

module.exports = router;
