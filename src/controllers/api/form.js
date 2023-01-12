const { Form } = require('../../../db/models');

const updateForm = async (req, res) => {

    const { link } = req.params

    let key = Object.keys(req.body)[0]
    let value = req.body[ Object.keys(req.body)[0] ] 

    let toUpdate = {}
    toUpdate [ key ] = value

    Form.update(
      toUpdate,
        { where: { link }, raw: true, returning: true }
      )
        .then((updatedPost) => {
          const [, [data]] = updatedPost;

          (updatedPost[0] === 1)
            ? res.json({ res: 'updated', key: key, value: data[key]})
            : res.status(400).json({ res: `cant UPDATE form with link ${link}` });
        })
        .catch((error) => res.status(500).json({ message: error.message }));
};

const getForm = async (req, res) => {

   const { link } = req.params

    Form.findOne(
      { where: { link }, raw: true }
    )
      .then((updatedPost) => {

        (updatedPost)
          ? res.json(updatedPost)
          : res.status(400).json({ res: `cant get form with link ${link}` });
      })
      .catch((error) => res.status(500).json({ message: error.message }));  
};

module.exports = { updateForm, getForm };
