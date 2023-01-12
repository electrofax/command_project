
const renderTemplate = require('../lib/renderTamplate');
const Adopt = require('../views/Adopt');
const AdoptAll = require('../views/AdoptAll');
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
let link = (Math.random() + 1).toString(36).substring(2);


  try {
    await Form.create({
      employee_name, mentor_name, user_id: 1, link
    });
    // res.json({ created: true, first: `${title}`, message: `${body}` });
    res.redirect('/adopt/all');
  } catch (e) {
    res.status(400).send(`${e}`);
  }
};

const allAdoptList = async (req, res) => {
  try{
  const all = await Form.findAll({ order: [['id', 'ASC']], raw: true});

    const some = await Form.findAll({ order : [['id', 'ASC']],
     attributes: { exclude : ['user_id', 'employee_name', 'mentor_name', 'createdAt', 'updatedAt', 'three_names']}, raw: true
    });


console.log('ssss', some)  
    renderTemplate(AdoptAll, { all, some }, res);
  } catch(e) {
    res.status(400).send(`${e}`);
  }
}



module.exports = { renderAdopt, addEmployee, allAdoptList };
