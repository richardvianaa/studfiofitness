'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userADM', {
      id_userADM: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nomeADM: Sequelize.STRING,
      codeNomeADM: Sequelize.STRING,
      emailADM: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      passwordADM: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    }
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userADM')
  }
};
