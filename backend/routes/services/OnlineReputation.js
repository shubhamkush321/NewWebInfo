const express = require('express');
const router = express.Router();
const {
  createOnlineReputation,
  getAllOnlineReputation,
  getOnlineReputationById,
  updateOnlineReputation,
  deleteOnlineReputation,
} = require('../../controllers/Services/OnlineReputation');

// Route to create or update Online Reputation data
router.post('/', createOnlineReputation);

// Route to get all Online Reputation data
router.get('/', getAllOnlineReputation);

// Route to get Online Reputation data by ID
router.get('/:id', getOnlineReputationById);

// Route to update Online Reputation data by ID
router.put('/:id', updateOnlineReputation);

// Route to delete Online Reputation data by ID
router.delete('/:id', deleteOnlineReputation);

module.exports = router;
