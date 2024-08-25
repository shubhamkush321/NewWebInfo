const express = require('express');
const router = express.Router();
const flashDataController = require('../../controllers/DesignDevelopment/FlashAnimation');

// Create a new FlashData entry
router.post('/', flashDataController.createFlashData);

// Read all FlashData entries
router.get('/', flashDataController.getAllFlashData);

// Read a single FlashData entry by ID
router.get('/:id', flashDataController.getFlashDataById);

// Update a FlashData entry by ID
router.put('/:id', flashDataController.updateFlashData);

// Delete a FlashData entry by ID
router.delete('/:id', flashDataController.deleteFlashData);

module.exports = router;
