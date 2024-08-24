const express = require('express');
const router = express.Router();
const {
  createCelebrityReputation,
  getAllCelebrityReputations,
  getCelebrityReputationById,
  updateCelebrityReputationById,
  deleteCelebrityReputationById
} = require('../../controllers/Services/CelebrityReputation');

// Route to create a new celebrity reputation document
router.post('/', createCelebrityReputation);

// Route to get all celebrity reputation documents
router.get('/', getAllCelebrityReputations);

// Route to get a single document by ID
router.get('/:id', getCelebrityReputationById);

// Route to update a document by ID
router.put('/:id', updateCelebrityReputationById);

// Route to delete a document by ID
router.delete('/:id', deleteCelebrityReputationById);

module.exports = router;
