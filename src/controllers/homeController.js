
const renderTemplate = require('../lib/renderTamplate');
const Home = require('../views/Home');
// const { User } = require('../db/models')


const renderHome = async (req, res) => {
    const user = req.session?.userName;
  renderTemplate(Home, { user }, res);
};



module.exports = { renderHome };
