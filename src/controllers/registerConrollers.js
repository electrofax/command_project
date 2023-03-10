const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTamplate');
const Register = require('../views/Register');
const Error = require('../views/Error')

const { User } = require('../../db/models');

// cоздаем функцию регистрации (по сути рендер страницы)
const renderRegister = (req, res) => {
  // console.log('req.session===>', req.session);
  const user = req.session?.isAdmin;
  renderTemplate(Register, { user }, res);
};

// функция обрабочтик формы
const regUser = async (req, res) => {
  const user = req.session?.isAdmin;
  const { login, email, password, name, isAdmin } = req.body;
  console.log(req.body);
  try {
    const hash = await bcrypt.hash(password, 10);
    await User.create({ login, email, password: hash, name, isAdmin });
      res.redirect('/adopt');
  } catch (error) {
    renderTemplate(Error, { message: 'Ошибка, данные введены не верно', user}, res)
  }
};

module.exports = { renderRegister, regUser };
