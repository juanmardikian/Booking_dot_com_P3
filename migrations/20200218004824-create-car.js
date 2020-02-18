'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateStart: {
        allowNull: false,
        type: Sequelize.DATE
      },
      carRentalId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      carClass: {
        type: Sequelize.STRING
      },
      numberOfDays: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pickUpCity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dropOffCity: {
        type: Sequelize.STRING
      },
      isAvailable: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      dailyRate: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Cars');
  }
};