'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userCliente', {
      id_userCliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nomeCliente: Sequelize.STRING,
      codeNomeCliente: Sequelize.STRING,
      idadeCliente: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      emailCliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numeroCliente: {
        type: Sequelize.STRING, //MUDAR PARA NUMBER
        allowNull: false
      },
      generoCliente: {
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
    await queryInterface.dropTable('userCliente')
  }
};