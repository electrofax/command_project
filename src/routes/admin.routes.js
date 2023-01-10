const express = require('express');

const router = express.Router();

const { renderAdmin } = require('../controllers/adminControllers');

router
  .get('/', renderAdmin)

module.exports = router;
  