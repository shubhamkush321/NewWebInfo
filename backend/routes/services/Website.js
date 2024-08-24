const express = require('express');
const router = express.Router();
const contentController = require('../../controllers/Services/Website');

router.post('/', contentController.createContent);
router.get('/', contentController.getAllContent);
router.get('/:id', contentController.getContentById);
router.put('/:id', contentController.updateContent);
router.delete('/:id', contentController.deleteContent);

module.exports = router;
