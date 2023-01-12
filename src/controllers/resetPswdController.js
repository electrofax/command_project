const renderTemplate = require('../lib/renderTamplate');
const Reset = require('../views/Reset');
const { User } = require('../../db/models')



const renderReset = async (req, res) => {
    const user = req.session?.userName;
    const us = req.session
    console.log('ussssss', us)
    const one = await User.findOne({ where: { id: req.params.id } });
    console.log('hrrrrr', user)
  renderTemplate(Reset, { user, one }, res);
};



module.exports = { renderReset };