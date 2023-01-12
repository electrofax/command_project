const express = require('express');

const router = express.Router();

const { renderOverview } = require('../controllers/overviewController');

router
  .get('/', renderOverview)
  // .post('/', regUser);

module.exports = router;
