const express = require('express');

const router = express.Router();

const { renderAdopt, addEmployee } = require('../controllers/adoptController');

router
  .get('/', renderAdopt)
  .post('/', addEmployee);

module.exports = router;
  