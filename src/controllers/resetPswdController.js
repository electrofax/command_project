const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTamplate');
const Reset = require('../views/Reset');
const { User } = require('../../db/models')
const killer = require('../middlewares/sessionKiller');



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
  const { password, id, isAdmin } = req.body;
  if(password && id){
  try{
  
  console.log('req.bodyFIRSTTTTT', req.body);
  const hash = await bcrypt.hash(password, 10);
  const change = await User.update({ password: hash}, { where: { id: id } });
  res.json({updated: true});
  console.log(change);
  
} catch(e) {
  res.send('Not done for change pswd')
  // renderTemplate(Error, { message: 'Ошибка, данные введены не верно'}, res)
}
  } else {
    console.log('beforeIFFFFFFF', req.session.userId, id)
    if(req.session.userId == id) {
      try{
        console.log('SSSSSESSION', req.session)
        
      console.log('req.bodyKILLER', req.body, isAdmin);
      await User.update({ isAdmin: isAdmin}, { where: { id: id } });
      console.log('beforeKiller')
      req.session.destroy(() => {
        res.clearCookie('ProgectCookie');
        res.json({destroySession: true});
      });
      } catch(e) {
        res.send('Not done for admin change')
      }
  } else {
    try{
      console.log('SSSSSESSION', req.session)
      
    console.log('req.bodyNOTKILLER', req.body, isAdmin);
    await User.update({ isAdmin: isAdmin}, { where: { id: id } });
    } catch(e) {
      res.send('Not done for admin change')
    }
  }
  }
}





module.exports = { renderReset, updatePassword };