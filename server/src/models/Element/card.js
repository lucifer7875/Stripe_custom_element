const express = require('express');
const router = express.Router();
const cardController = require('./cardController');

router.get('/secret', cardController.clientSecret)

module.exports = router