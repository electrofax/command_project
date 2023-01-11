
const renderTemplate = require('../lib/renderTamplate');
const Adopt = require('../views/Adopt');
const { Form } = require('../../db/models')


const renderAdopt = async (req, res) => {
    const user = req.session?.userName;
  renderTemplate(Adopt, { user }, res);
};

const addEmployee = async (req, res) => {
  const {
    employee_name, mentor_name,
  } = req.body;
  console.log('reqBODY=>>', req.body);
  // if (title && body) {
  try {
    await Form.create({
      employee_name, mentor_name, user_id: 1
    });
    // res.json({ created: true, first: `${title}`, message: `${body}` });
    // res.redirect('/post');
  } catch (e) {
    res.status(401).send(`${e}`);
  }
};



module.exports = { renderAdopt, addEmployee };
