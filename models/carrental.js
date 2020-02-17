'use strict';
module.exports = (sequelize, DataTypes) => {
  const CarRental = sequelize.define('CarRental', {
    dateStart: DataTypes.DATE,
    companyName: DataTypes.STRING,
    carClass: DataTypes.STRING,
    numberOfDays: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    dropOffCity: DataTypes.INTEGER
  }, {});
  CarRental.associate = function(models) {
    // associations can be defined here
    CarRental.belongsTo(models.Location, {
      foreignKey: 'locationId',
      onDelete: 'CASCADE'
    })

  };
  return CarRental;
};