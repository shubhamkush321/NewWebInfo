// routes/enterPriceContentRoutes.js
const express = require('express');
const router = express.Router();
const enterPriceContentController = require('../../controllers/Seo/EnterPriceContentController');

// Routes for EnterPriceContent
router.post('/', enterPriceContentController.create);
router.get('/', enterPriceContentController.getAll);
router.get('/:id', enterPriceContentController.getById);
router.put('/:id', enterPriceContentController.update);
router.delete('/:id', enterPriceContentController.delete);

module.exports = router;
