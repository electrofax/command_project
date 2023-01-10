const express = require('express');

const router = express.Router();

const { renderAdmin, addEmployee } = require('../controllers/adminControllers');

router
  .get('/', renderAdmin)
  .post('/', addEmployee);

module.exports = router;
  