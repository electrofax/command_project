
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTamplate');
const Auth = require('../views/Auth');
const { User } = require('../../db/models');
const Error = require('../views/Error')

const renderAuth = (req, res) => {
  renderTemplate(Auth, null, res);
};

const loginUser = async (req, res) => {
  const { login, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        req.session.userName = user.login;
        req.session.isAdmin = user.isAdmin
        req.session.userId = user.id
        req.session.save(() => {
          res.redirect('/adopt');
        });
      } else {
        renderTemplate(Error, { message: 'Пароль Не Верный'}, res)
        // res.redirect('/auth');
      }
    } else {
      renderTemplate(Error, { message: 'Такого Пользователя не существует'}, res)
      // res.redirect('/');
    }
  } catch (error) {
    renderTemplate(Error, { message: 'Ошибка, данные введены не верно'}, res)
  }
};

module.exports = { renderAuth, loginUser };
