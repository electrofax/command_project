const renderTemplate = require('../lib/renderTamplate');
const Forms = require('../views/Form');
const { Form } = require('../../db/models')

const renderForm = (req, res) => {
  renderTemplate(Forms, {fetchForm: true}, res);
};

const renderOneForm = async (req, res) => {
  try{
  const one = await Form.findOne({ where: { link: req.params.link } });
  renderTemplate(Forms, { one, fetchForm: true}, res);
}catch(e) {
  res.status(400).send(`${e}`);
}
}




module.exports = { renderForm, renderOneForm };
