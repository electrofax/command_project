const express = require('express');

const router = express.Router();

const { renderReset } = require('../controllers/resetPswdController');

router
  .get('/:id', renderReset)
  // .post('/', regUser);

module.exports = router;