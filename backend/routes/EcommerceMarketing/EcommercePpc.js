const express = require('express');
const router = express.Router();
const {
  createEcommercePpcContent,
  getAllEcommercePpcContent,
  getEcommercePpcContentById,
  updateEcommercePpcContent,
  deleteEcommercePpcContent
} = require('../../controllers/EcommerceMarketing/EcommercePpc');

// Route to create new content
router.post('/', createEcommercePpcContent);

// Route to get all content
router.get('/', getAllEcommercePpcContent);

// Route to get content by ID
router.get('/:id', getEcommercePpcContentById);

// Route to update content by ID
router.put('/:id', updateEcommercePpcContent);

// Route to delete content by ID
router.delete('/:id', deleteEcommercePpcContent);

module.exports = router;
