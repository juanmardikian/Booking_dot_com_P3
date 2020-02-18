'use strict';
module.exports = (sequelize, DataTypes) => {
  const CarRental = sequelize.define('CarRental', {
    companyName: DataTypes.STRING,
    carNum: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER
  }, {});
  CarRental.associate = function (models) {
    // associations can be defined here
    CarRental.belongsTo(models.Location, {
      foreignKey: 'locationId',
      onDelete: 'CASCADE'
    }),
      CarRental.hasMany(models.Car, {
        foreignKey: 'carRentalId',
        onDelete: 'CASCADE'
      })

  };
  return CarRental;
};