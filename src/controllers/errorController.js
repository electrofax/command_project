const renderTemplate = require('../lib/renderTamplate');
const Error = require('../views/Error');

const renderError = (req, res) => {
  renderTemplate(Error, null , res);
};




module.exports = { renderError };
