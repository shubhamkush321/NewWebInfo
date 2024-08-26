const express = require('express');
const router = express.Router();
const payPerController = require('../../controllers/Services/payPer');

// Route to create a new PayPer document
router.post('/', payPerController.createPayPer);

// Route to get all PayPer documents
router.get('/', payPerController.getAllPayPer);

// Route to get a single PayPer document by ID
router.get('/:id', payPerController.getPayPerById);

// Route to update a PayPer document by ID
router.put('/:id', payPerController.updatePayPer);

// Route to delete a PayPer document by ID
router.delete('/:id', payPerController.deletePayPer);

module.exports = router;
