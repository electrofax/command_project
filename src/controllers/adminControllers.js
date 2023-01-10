
const renderTemplate = require('../lib/renderTamplate');
const Admin = require('../views/Admin');
// const { User } = require('../db/models')


const renderAdmin = async (req, res) => {
    const user = req.session?.userName;
  renderTemplate(Admin, { user }, res);
};



module.exports = { renderAdmin };
