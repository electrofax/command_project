const killer = (req, res, next) => { 
  //  убил сессию
  req.session.destroy(() => {
    res.clearCookie('ProgectCookie');
    res.redirect('/');
  });
};

module.exports = killer;