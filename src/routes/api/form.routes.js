const express = require('express');
const router = express.Router();
const { updateForm } = require('../../controllers/api/form');


router
.put('/', updateForm)

module.exports = router;
  