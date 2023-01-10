const express = require('express');
const router = express.Router();
const { updateForm } = require('../../controllers/updateFormControllers');


router
.put('/', updateForm)

module.exports = router;
  