const express = require('express');
const router = express.Router();
const { QueryTypes } = require('sequelize');
const { Form, sequelize } = require('../../../db/models');

const updateForm = async (req, res) => {

    let id = 1;
    const { employee_name, pass_key } = req.body

    Form.update(
        { pass_key: pass_key },
        { where: { id: id }, raw: true, returning: true }
      )
        .then((updatedPost) => {
          const [, [updatedData]] = updatedPost;

          const key = Object.keys(req.body)[0]

          updatedPost[0] === 1
            ? res.json({ res: 'updated', key: key, value: updatedData.pass_key})
            : res.status(500).json({ res: `cant UPDATE form with ${id}` });
        })
        .catch((error) => res.status(500).json({ message: error.message }));
};


module.exports = { updateForm };
