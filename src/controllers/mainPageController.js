
const renderTemplate = require('../lib/renderTamplate');
const MainPage = require('../views/MainPage');
// const { User } = require('../db/models')


const rendermainPage = async (req, res) => {
    const user = req.session?.userName;
  renderTemplate(MainPage, { user }, res);
};



module.exports = { rendermainPage };
