const express = require('express');
const router = express.Router();
const {
  createShopifySeoContent,
  getAllShopifySeoContent,
  getShopifySeoContentById,
  updateShopifySeoContent,
  deleteShopifySeoContent
} = require('../../controllers/EcommerceMarketing/ShopifySeo');

// Route to create new content
router.post('/', createShopifySeoContent);

// Route to get all content
router.get('/', getAllShopifySeoContent);

// Route to get content by ID
router.get('/:id', getShopifySeoContentById);

// Route to update content by ID
router.put('/:id', updateShopifySeoContent);

// Route to delete content by ID
router.delete('/:id', deleteShopifySeoContent);

module.exports = router;
