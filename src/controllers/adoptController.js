
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
  try {
    await Form.create({
      employee_name, mentor_name, user_id: 1
    });
    // res.json({ created: true, first: `${title}`, message: `${body}` });
    // res.redirect('/post');
  } catch (e) {
    res.status(400).send(`${e}`);
  }
};

const allAdoptList = async (req, res) => {
  try{
  const all = await Form.findAll({ order: [['id', 'ASC']], raw: true});

    const some = await Form.findAll({ order : [['id', 'ASC']],
     attributes: { exclude : ['user_id', 'employee_name', 'mentor_name', 'createdAt', 'updatedAt', 'link', 'three_names']}, raw: true
    });


console.log('ssss', some)

  // const isBool = Object.fromEntries(
  //   // преобразовать в массив, затем map, затем fromEntries обратно объект
  //   Object.entries(all[4]).map(([key, value]) => [key, typeof(value)=== 'boolean'])
  // );
  // const procent = Object.values(isBool);
  // const mapped = procent.filter((el) =>  el === true)
  // console.log(isBool)
  // console.log('truuuuuue', procent)
  // console.log('mappped', mapped)
  // console.log(JSON.stringify(all[1]))
  
    renderTemplate(AdoptAll, { all, some }, res);
  } catch(e) {
    res.status(400).send(`${e}`);
  }
}



module.exports = { renderAdopt, addEmployee, allAdoptList };
