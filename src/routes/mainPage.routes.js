const express = require('express');

const router = express.Router();

const { rendermainPage } = require('../controllers/mainPageController');

router
  .get('/', rendermainPage)

module.exports = router;
  