
const renderTemplate = require('../lib/renderTamplate');
const Adopt = require('../views/Adopt');
const AdoptAll = require('../views/AdoptAll');
const AdoptOne = require('../views/AdoptOne');
const { Form, User } = require('../../db/models')
const Error = require('../views/Error')


const renderAdopt=async (req, res) => {
  const user = req.session?.isAdmin;
  renderTemplate(Adopt, { user }, res);
};

const addEmployee = async (req, res) => {
  const {
    employee_name, mentor_name,
  } = req.body;
let link = (Math.random() + 1).toString(36).substring(2);
  try {
    const user = req.session?.isAdmin;
    const userId = req.session?.userId

    console.log('======....>>>>>',employee_name);
    if (employee_name !=='' && mentor_name !==''){
      await Form.create({
        employee_name, mentor_name, user_id:userId, link
      });
      res.redirect('/adopt/all');
    }else{
      renderTemplate(Error, { message: 'Ошибка, Введите Полное Имя Сотрудника и Имя Ментора',user}, res)
    }

    // res.json({ created: true, first: `${title}`, message: `${body}` });
    }catch (e) {
      res.redirect('/')
  }
}

const allAdoptList = async (req, res) => {
  try{
    const user = req.session?.isAdmin;
  const all = await Form.findAll({ order: [['id', 'ASC']], raw: true});

    const some = await Form.findAll({ order : [['id', 'ASC']],
      attributes: { exclude : ['user_id', 'employee_name', 'mentor_name', 'createdAt', 'updatedAt', 'three_names']}, raw: true
    });


// console.log('ssss', some)  
    renderTemplate(AdoptAll, { all, some, user }, res);
  } catch(e) {
    res.status(400).send(`${e}`);
  }
}

const oneAdoptList = async (req, res) => {
  try {
    const log = req.session?.userName;
    const user = req.session?.isAdmin;
    const userFromDb = await User.findOne({ where : { login:log }, raw: true })
    const findOneUser = await Form.findAll({ order : [['id', 'ASC']], where : { user_id: userFromDb.id}, raw: true})

    const some = await Form.findAll({where : { user_id: userFromDb.id}, order : [['id', 'ASC']],
    attributes: { exclude : ['user_id', 'employee_name', 'mentor_name', 'createdAt', 'updatedAt', 'three_names']}, raw: true
    });

    console.log('usssssser', user)
    console.log('usssssserdbbbbb', userFromDb.id)
    console.log('finndddd', findOneUser)
    console.log('someeeeeeeeeeee', some)
    renderTemplate(AdoptOne, { user, findOneUser, some }, res);
    // res.send('heeee')
  } catch(e){
    res.status(400).send(`${e}`);
  }
}


module.exports = { renderAdopt, addEmployee, allAdoptList, oneAdoptList };
