// routes/Auth/authRoutes.js
const express = require('express');
const { login } = require('../../controllers/Auth/authController');

const router = express.Router();

router.post('/login', login); // Ensure this is the correct endpoint

module.exports = router;
