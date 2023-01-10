const { users } = require('../fixtures/users')
const { sequelize } = require('../models');

  /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', users, {
      truncate: true,
      cascade: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await sequelize.query('ALTER SEQUENCE "Users_id_seq" RESTART WITH 1');
    await queryInterface.bulkDelete('Users', null, {
      truncate: true,
      cascade: true,
    });
  },
};
