'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    dateStart: DataTypes.DATE,
    carRentalId: DataTypes.INTEGER,
    carClass: DataTypes.STRING,
    numberOfDays: DataTypes.INTEGER,
    pickUpCity: DataTypes.STRING,
    dropOffCity: DataTypes.STRING,
    isAvailable: DataTypes.BOOLEAN,
    dailyRate: DataTypes.INTEGER
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
    Car.belongsTo(models.CarRental, {
      foreignKey: 'carRentalId',
      onDelete: 'CASCADE'
    })
  };
  return Car;
};