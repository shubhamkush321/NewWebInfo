const express = require('express');
const router = express.Router();
const {
  createBrandReputation,
  getAllBrandReputations,
  getBrandReputationById,
  updateBrandReputation,
  deleteBrandReputation,
} = require('../../controllers/Services/BrandReputation');

// Route to create a new Brand Reputation document
router.post('/', createBrandReputation);

// Route to get all Brand Reputation documents
router.get('/', getAllBrandReputations);

// Route to get a single Brand Reputation document by ID
router.get('/:id', getBrandReputationById);

// Route to update a Brand Reputation document by ID
router.put('/:id', updateBrandReputation);

// Route to delete a Brand Reputation document by ID
router.delete('/:id', deleteBrandReputation);

module.exports = router;
