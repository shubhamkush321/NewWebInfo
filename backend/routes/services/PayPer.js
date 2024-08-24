const express = require('express');
const router = express.Router();
const payPerController = require('../../controllers/Services/payPer');

// Create a new PayPer entry
router.post('/', payPerController.createPayPer);

// Get all PayPer entries
router.get('/', payPerController.getPayPer);

// Get a single PayPer entry by ID
router.get('/:id', payPerController.getPayPerById);

// Update a PayPer entry by ID
router.put('/:id', payPerController.updatePayPer);

// Delete a PayPer entry by ID
router.delete('/:id', payPerController.deletePayPer);

module.exports = router;
