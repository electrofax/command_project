const renderTemplate = require('../lib/renderTamplate');
const Error = require('../views/Error');

const renderError = (req, res) => {
  renderTemplate(Error, { user } , res);
};




module.exports = { renderError };
