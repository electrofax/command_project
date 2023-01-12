
const renderTemplate = require('../lib/renderTamplate');
const MainPage = require('../views/MainPage');
// const { User } = require('../db/models')


const rendermainPage = async (req, res) => {
    const user = req.session?.isAdmin;
    // const admin = req.session?.isAdmin;
  renderTemplate(MainPage, { user}, res);
};



module.exports = { rendermainPage };
