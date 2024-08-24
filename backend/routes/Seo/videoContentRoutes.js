// routes/videoContentRoutes.js
const express = require('express');
const router = express.Router();
const videoContentController = require('../../controllers/Seo/videoContentController');

// Create multiple video content entries
router.post('/', videoContentController.createVideoContent);

// Get all video content entries
router.get('/', videoContentController.getVideoContent);

// Update a specific video content entry by ID
router.put('/:id', videoContentController.updateVideoContent);

// Delete a specific video content entry by ID
router.delete('/:id', videoContentController.deleteVideoContent);

module.exports = router;