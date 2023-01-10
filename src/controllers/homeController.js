const renderTemplate = require('../lib/renderTamplate');
const Form = require('../views/Form');
// const Home = require('../views/Home');
// const { User } = require('../db/models')


const renderHome = async (req, res) => {
    const user = req.session?.userName;
  renderTemplate(Home, { user }, res);
};
const renderForm = (req, res) => {
  renderTemplate(Form, {}, res);
};




module.exports = { renderHome, renderForm };
