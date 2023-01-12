const express = require('express');
const router = express.Router();
const { updateForm, getForm } = require('../../controllers/api/form');

router
.put('/:link', updateForm)
.get('/:link', getForm)

module.exports = router;
  