// routes/DesignDevelopment/responsiveContentRoutes.js

const express = require('express');
const router = express.Router();
const responsiveController = require('../../controllers/DesignDevelopment/responsiveContentController');

// Route to create or update content
router.post('/', responsiveController.createOrUpdateContent);

// Route to get all content
router.get('/', responsiveController.getAllContent);

// Route to get content by ID
router.get('/:id', responsiveController.getContentById);

// Route to delete content by ID
router.delete('/:id', responsiveController.deleteContentById);

module.exports = router;
