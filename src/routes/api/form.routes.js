const express = require('express');
const router = express.Router();
const { updateForm, getForm } = require('../../controllers/api/form');


router
.put('/', updateForm)
.get('/:id', getForm)

module.exports = router;
  