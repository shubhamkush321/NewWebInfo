// routes/DesignDevelopment/graphicDesignRoutes.js
const express = require('express');
const router = express.Router();
const graphicDesignController = require('../../controllers/DesignDevelopment/GraphicDesign');

// Create a new GraphicDesign entry
router.post('/', graphicDesignController.createGraphicDesign);

// Read all GraphicDesign entries
router.get('/', graphicDesignController.getAllGraphicDesigns);

// Read a single GraphicDesign entry by ID
router.get('/:id', graphicDesignController.getGraphicDesignById);

// Update a GraphicDesign entry by ID
router.put('/:id', graphicDesignController.updateGraphicDesign);

// Delete a GraphicDesign entry by ID
router.delete('/:id', graphicDesignController.deleteGraphicDesign);

module.exports = router;
