const { forms } = require('../fixtures/forms')
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Forms', forms, {
      truncate: true,
      cascade: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await sequelize.query('ALTER SEQUENCE "Forms_id_seq" RESTART WITH 1');
    await queryInterface.bulkDelete('Forms', null, {
      truncate: true,
      cascade: true,
    });
  },
};
