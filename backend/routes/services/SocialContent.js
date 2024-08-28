// routes/socialContentRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllSocialContents,
  getSocialContentById,
  createSocialContent,
  updateSocialContent,
  deleteSocialContent
} = require('../../controllers/Services/SocialContent');

// Define routes
router.get('/', getAllSocialContents);
router.get('/:id', getSocialContentById);
router.post('/', createSocialContent);
router.put('/:id', updateSocialContent);
router.delete('/:id', deleteSocialContent);

module.exports = router;
