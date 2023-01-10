const express = require('express');

const router = express.Router();

const { renderForm } = require("../controllers/homeController");


router.get("/", renderForm);

module.exports = router;
  