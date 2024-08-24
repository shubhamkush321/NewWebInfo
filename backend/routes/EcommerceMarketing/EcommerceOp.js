const express = require('express');
const router = express.Router();
const {
  createEcommerceOpContent,
  getAllEcommerceOpContent,
  getEcommerceOpContentById,
  updateEcommerceOpContent,
  deleteEcommerceOpContent
} = require('../../controllers/EcommerceMarketing/EcommerceOp');

// Route to create new content
router.post('/', createEcommerceOpContent);

// Route to get all content
router.get('/', getAllEcommerceOpContent);

// Route to get content by ID
router.get('/:id', getEcommerceOpContentById);

// Route to update content by ID
router.put('/:id', updateEcommerceOpContent);

// Route to delete content by ID
router.delete('/:id', deleteEcommerceOpContent);

module.exports = router;
