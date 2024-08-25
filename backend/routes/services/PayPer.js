// routes/payPerRoutes.js
const express = require('express');
const router = express.Router();
const PayPerController = require('../../controllers/Services/payPer');

// Get all PPC data
router.get('/', PayPerController.getAll);

// Create new PPC data
router.post('/', PayPerController.create);

// Update existing PPC data
router.put('/:id', PayPerController.update);

// Delete PPC data
router.delete('/:id', PayPerController.delete);

module.exports = router;
