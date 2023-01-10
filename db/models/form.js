'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Form.init({
    employee_name: {
      type: DataTypes.STRING
    },
    mentor_name: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    pass_key: {
      type: DataTypes.BOOLEAN
    },
    wifi: {
      type: DataTypes.BOOLEAN
    },
    laptop: {
      type: DataTypes.BOOLEAN
    },
    email_pass: {
      type: DataTypes.BOOLEAN
    },
    stationery: {
      type: DataTypes.BOOLEAN
    },
    meet_head: {
      type: DataTypes.BOOLEAN
    },
    chattochat: {
      type: DataTypes.BOOLEAN
    },
    three_names: {
      type: DataTypes.STRING
    },
    three_names_check: {
      type: DataTypes.BOOLEAN
    },
    skans_of_docks: {
      type: DataTypes.BOOLEAN
    },
    com_secret: {
      type: DataTypes.BOOLEAN
    },
    link: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Form',
  });
  return Form;
};