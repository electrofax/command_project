
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTamplate');
const Auth = require('../views/Auth');
const { User } = require('../../db/models');

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
        req.session.save(() => {
          res.redirect('/adopt');
        });
      } else {
        res.redirect('/auth');
      }
    } else {
      res.redirect('/register');
    }
  } catch (error) {
    res.send(`ERROR---> ${error}`);
  }
};

module.exports = { renderAuth, loginUser };
