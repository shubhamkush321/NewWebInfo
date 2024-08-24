// routes/services/WebDesign.js
const express = require('express');
const router = express.Router();
const webDesignController = require('../../controllers/Services/WebDesign');

// CRUD Routes
router.post('/', webDesignController.createWebDesign); 
router.get('/', webDesignController.getWebDesigns);
router.get('/:id', webDesignController.getWebDesignById);
router.put('/:id', webDesignController.updateWebDesign);
router.delete('/:id', webDesignController.deleteWebDesign);

module.exports = router;
