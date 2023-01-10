'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee_name: {
        type: Sequelize.STRING
      },
      mentor_name: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: {
                tableName: 'Users',
            },
        key: 'id'}
      },
      pass_key: {
        type: Sequelize.BOOLEAN
      },
      wifi: {
        type: Sequelize.BOOLEAN
      },
      laptop: {
        type: Sequelize.BOOLEAN
      },
      email_pass: {
        type: Sequelize.BOOLEAN
      },
      stationery: {
        type: Sequelize.BOOLEAN
      },
      meet_head: {
        type: Sequelize.BOOLEAN
      },
      chattochat: {
        type: Sequelize.BOOLEAN
      },
      three_names: {
        type: Sequelize.STRING
      },
      three_names_check: {
        type: Sequelize.BOOLEAN
      },
      skans_of_docks: {
        type: Sequelize.BOOLEAN
      },
      com_secret: {
        type: Sequelize.BOOLEAN
      },
      link: {
        type: Sequelize.STRING
      },
      first_task: {
        type: Sequelize.BOOLEAN
      },
      email_sign: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Forms');
  }
};
