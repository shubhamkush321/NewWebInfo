// routes/advertiseRoutes.js
const express = require('express');
const router = express.Router();
const advertiseController = require('../../controllers/EcommerceMarketing/AmazonAdvertise');

router.get('/', advertiseController.getAllContent);
router.get('/:id', advertiseController.getContentById);
router.post('/', advertiseController.createContent);
router.put('/:id', advertiseController.updateContent);
router.delete('/:id', advertiseController.deleteContent);

module.exports = router;
