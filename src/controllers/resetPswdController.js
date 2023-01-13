const renderTemplate = require('../lib/renderTamplate');
const Reset = require('../views/Reset');
const { User } = require('../../db/models')



const renderReset = async (req, res) => {
  try{
    const user = req.session?.userName;
    const us = req.session
    console.log('ussssss', us)
    console.log(req.body);
    const one = await User.findOne({ where: { id: req.params.id } });
    console.log('hrrrrr', user)
  renderTemplate(Reset, { user, one }, res);
  } catch(e) {
    res.send('slomalos')
  }
};

const updatePassword = async (req, res) => {
  try{
  // const { password, verify } = req.body;
  console.log('req.body');
  console.log(req.body);
  // res.send('meeee')
  
} catch(e) {
  res.send('((((')
  // renderTemplate(Error, { message: 'Ошибка, данные введены не верно'}, res)
}
}



module.exports = { renderReset, updatePassword };