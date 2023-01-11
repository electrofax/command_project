const express = require('express');

const router = express.Router();

const { renderAuth, loginUser } = require('../controllers/authConrollers');

router
  .get('/', renderAuth)
  .post('/', loginUser);

module.exports = router;
