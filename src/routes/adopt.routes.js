const express = require('express');

const router = express.Router();

const { renderAdopt, addEmployee, allAdoptList } = require('../controllers/adoptController');

router
  .get('/', renderAdopt)
  .post('/', addEmployee)
  .get('/all', allAdoptList)

module.exports = router;
  