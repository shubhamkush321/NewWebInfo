const express = require('express');
const router = express.Router();
const mainController = require("../controllers/MainController");

// Create a new item
router.post('/items', mainController.createMainDocument);
router.get('/items', mainController.getAllDocuments);


module.exports = router;
