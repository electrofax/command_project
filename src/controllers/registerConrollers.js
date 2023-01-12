const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTamplate');
const Register = require('../views/Register');

const { User } = require('../../db/models');

// cоздаем функцию регистрации (по сути рендер страницы)
const renderRegister = (req, res) => {
  // console.log('req.session===>', req.session);
  const user = req.session?.userName;
  renderTemplate(Register, { user }, res);
};

// функция обрабочтик формы
const regUser = async (req, res) => {
  const { login, email, password, name, isAdmin } = req.body;
  console.log(req.body);
  try {
    const hash = await bcrypt.hash(password, 10);
    await User.create({ login, email, password: hash, name, isAdmin });
      res.redirect('/admin');
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};

module.exports = { renderRegister, regUser };
