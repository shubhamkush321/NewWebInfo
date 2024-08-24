const express = require('express');
const router = express.Router();
const socialController = require('../../controllers/Services/SocialContent');

// Define routes for social content
router.post('/', socialController.createSocialContent);
router.get('/', socialController.getAllSocialContent);
router.get('/:id', socialController.getSocialContentById);
router.put('/:id', socialController.updateSocialContentById);
router.delete('/:id', socialController.deleteSocialContentById);

module.exports = router;
