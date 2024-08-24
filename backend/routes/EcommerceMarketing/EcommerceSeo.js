const express = require('express');
const router = express.Router();
const {
  createEcommerceSeoContent,
  getAllEcommerceSeoContent,
  getEcommerceSeoContentById,
  updateEcommerceSeoContent,
  deleteEcommerceSeoContent
} = require('../../controllers/EcommerceMarketing/EcommerceSeo');

// Route to create new content
router.post('/', createEcommerceSeoContent);

// Route to get all content
router.get('/', getAllEcommerceSeoContent);

// Route to get content by ID
router.get('/:id', getEcommerceSeoContentById);

// Route to update content by ID
router.put('/:id', updateEcommerceSeoContent);

// Route to delete content by ID
router.delete('/:id', deleteEcommerceSeoContent);

module.exports = router;
