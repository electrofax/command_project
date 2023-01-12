const express = require('express');

const router = express.Router();

const { renderAdopt, addEmployee, allAdoptList, oneAdoptList } = require('../controllers/adoptController');

router
  .get('/', renderAdopt)
  .post('/', addEmployee)
  .get('/all', allAdoptList)
  .get('/one', oneAdoptList)

module.exports = router;
  