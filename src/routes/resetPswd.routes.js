const express = require('express');

const router = express.Router();

const { renderReset, updatePassword } = require('../controllers/resetPswdController');

router
  .get('/:id', renderReset)
  .patch('/:id', updatePassword)

module.exports = router;