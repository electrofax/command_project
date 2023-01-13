const express = require('express');

const checkLogin = require('../middlewares/checkLogin')
const router = express.Router();

const { rendermainPage } = require('../controllers/mainPageController');

router
  .get('/',checkLogin , rendermainPage)

module.exports = router;
  