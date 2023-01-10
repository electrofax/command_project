
const renderTemplate = require('../lib/renderTamplate');
const Admin = require('../views/Admin');
const { Form } = require('../../db/models')


const renderAdmin = async (req, res) => {
    const user = req.session?.userName;
  renderTemplate(Admin, { user }, res);
};

const addEmployee = async (req, res) => {
  const {
    employee_name, mentor_name,
  } = req.body;
  console.log('reqBODY=>>', req.body);
  // if (title && body) {
  try {
    await Form.create({
      employee_name, mentor_name,
    });
    // res.json({ created: true, first: `${title}`, message: `${body}` });
    // res.redirect('/post');
  } catch (e) {
    res.status(401).send(`${e}`);
  }
};



module.exports = { renderAdmin, addEmployee };
