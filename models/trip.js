'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    userId: DataTypes.INTEGER,
    dateStart: DataTypes.DATE,
    dateComplete: DataTypes.DATE,
    destination: DataTypes.INTEGER,
    hotel: DataTypes.STRING,
    flight: DataTypes.STRING,
    carRental: DataTypes.STRING,
    volunteerOp: DataTypes.STRING
  }, {});
  Trip.associate = function(models) {
    // associations can be defined here
  };
  return Trip;
};