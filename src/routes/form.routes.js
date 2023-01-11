const express = require('express');

const router = express.Router();

const { renderForm } = require("../controllers/homeController");
const { renderOneForm } = require('../controllers/formController')


router
.get("/", renderForm)
.get('/:id', renderOneForm);

module.exports = router;
  