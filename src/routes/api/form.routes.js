const express = require('express');
const router = express.Router();
const { updateForm, getForm } = require('../../controllers/api/form');


router
.put('/', updateForm)
.get('/', getForm)

module.exports = router;
  