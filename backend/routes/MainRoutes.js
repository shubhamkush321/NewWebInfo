// routes/mainRoutes.js

const express = require('express');
const router = express.Router();
const mainController = require('../../controllers/MainController');

// Create a new item
router.post('/items', mainController.createItem);

// Get all items
router.get('/items', mainController.getAllItems);

// Get an item by ID
router.get('/items/:id', mainController.getItemById);

// Update an item by ID
router.put('/items/:id', mainController.updateItem);

// Delete an item by ID
router.delete('/items/:id', mainController.deleteItem);

module.exports = router;
