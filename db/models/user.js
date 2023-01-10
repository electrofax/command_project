'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    login: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    isAdmin: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};