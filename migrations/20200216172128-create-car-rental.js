'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CarRentals', {
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
      companyName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      carClass: {
        type: Sequelize.STRING
      },
      numberOfDays: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      locationId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dropOffCity: {
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
    return queryInterface.dropTable('CarRentals');
  }
};