// мидла для выхода
const checkLogin = (req, res, next) => {
  if (req.session.userName) {
    res.redirect('/adopt');
  } else {
    next();
  }
};

module.exports = checkLogin;
