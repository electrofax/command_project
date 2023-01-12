const renderTemplate = require('../lib/renderTamplate');
const Overview = require('../views/Overview');



const renderOverview = async (req, res) => {
    // const user = req.session?.userName;
  renderTemplate(Overview, { }, res);
};



module.exports = { renderOverview };