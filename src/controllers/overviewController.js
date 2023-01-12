const renderTemplate = require('../lib/renderTamplate');
const Overview = require('../views/Overview');
const { User } = require('../../db/models')



const renderOverview = async (req, res) => {
  const user = req.session?.isAdmin;
    const hrUsers = await User.findAll({ raw: true })
    // console.log('hrrrrr', hrUsers)
  renderTemplate(Overview, { user, hrUsers}, res);
};

module.exports = { renderOverview };