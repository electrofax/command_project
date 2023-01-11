// мидла для выхода
const checkLogin = (req, res, next) => {
  if (req.session.userName) {
    res.redirect('/admin');
  } else {
    next();
  }
};

module.exports = checkLogin;
