const express = require('express');
const router = express.Router();
const createElement = require('../models/Element/card')

router.use('/element', createElement);


module.exports = router;