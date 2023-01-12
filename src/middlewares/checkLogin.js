// мидла для выхода
const checkLogin = (req, res, next) => {
  if (req.session.userName) {
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = checkLogin;
