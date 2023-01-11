const { Form } = require('../../../db/models');

const updateForm = async (req, res) => {
    let id = 1;

    let key = Object.keys(req.body)[0]
    let value = req.body[ Object.keys(req.body)[0] ] 

    let toUpdate = {}
    toUpdate [ key ] = value

    Form.update(
      toUpdate,
        { where: { id }, raw: true, returning: true }
      )
        .then((updatedPost) => {
          const [, [data]] = updatedPost;

          (updatedPost[0] === 1)
            ? res.json({ res: 'updated', key: key, value: data[key]})
            : res.status(400).json({ res: `cant UPDATE form with ${id}` });
        })
        .catch((error) => res.status(500).json({ message: error.message }));
};

const getForm = async (req, res) => {

  const { id } = req.params;

    Form.findOne(
      { where: { id }, raw: true }
    )
      .then((updatedPost) => {

        (updatedPost)
          ? res.json(updatedPost)
          : res.status(400).json({ res: `cant get form with ${id}` });
      })
      .catch((error) => res.status(500).json({ message: error.message }));  
};

module.exports = { updateForm, getForm };
