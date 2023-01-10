const express = require('express');
const router = express.Router();
const { QueryTypes } = require('sequelize');
const { Form, sequelize } = require('../../../db/models');

const updateForm = async (req, res) => {

    let id = 2;

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
            : res.status(500).json({ res: `cant UPDATE form with ${id}` });
        })
        .catch((error) => res.status(500).json({ message: error.message }));
};


module.exports = { updateForm };
