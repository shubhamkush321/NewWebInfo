const express = require('express');
const router = express.Router();
const {
  createPageData,
  getAllPageData,
  getPageDataById,
  updatePageData,
  deletePageData
} = require('../../controllers/Industries/ECommerceController');

// Route to create new page data
router.post('/', createPageData);

// Route to get all page data
router.get('/', getAllPageData);

// Route to get page data by ID
router.get('/:id', getPageDataById);

// Route to update page data by ID
router.put('/:id', updatePageData);

// Route to delete page data by ID
router.delete('/:id', deletePageData);

module.exports = router;
