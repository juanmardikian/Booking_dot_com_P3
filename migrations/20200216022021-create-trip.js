'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dateStart: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dateComplete: {
        allowNull: false,
        type: Sequelize.DATE
      },
      destination: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hotel: {
        type: Sequelize.STRING
      },
      flight: {
        type: Sequelize.STRING
      },
      carRental: {
        type: Sequelize.STRING
      },
      volunteerOp: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trips');
  }
};