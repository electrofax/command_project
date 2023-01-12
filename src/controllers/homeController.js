const renderTemplate = require('../lib/renderTamplate');
const Form = require('../views/Form');

const renderForm = (req, res) => {
  renderTemplate(Form, {fetchForm: true}, res);
};




module.exports = { renderForm };
