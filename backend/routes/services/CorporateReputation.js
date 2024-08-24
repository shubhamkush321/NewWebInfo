const express = require('express');
const router = express.Router();
const {
  createCorporateReputation,
  getAllCorporateReputation,
  getCorporateReputationById,
  deleteCorporateReputation,
} = require('../../controllers/Services/CorporateReputation');

// Route to create or update Corporate Reputation data
router.post('/', createCorporateReputation);

// Route to get all Corporate Reputation data
router.get('/', getAllCorporateReputation);

// Route to get Corporate Reputation data by ID
router.get('/:id', getCorporateReputationById);

// Route to delete Corporate Reputation data by ID
router.delete('/:id', deleteCorporateReputation);

module.exports = router;
