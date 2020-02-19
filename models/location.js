'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    propertiesNum: DataTypes.INTEGER,
    homeNum: DataTypes.INTEGER,
    contactNumber: DataTypes.STRING,
    pictureUrl: DataTypes.STRING
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    Location.hasMany(models.CarRental, {
      foreignKey: 'locationId',
      onDelete: 'CASCADE'
    }),
    Location.hasMany(models.Flight, {
      foreignKey: 'locationId',
      onDelete: 'CASCADE'
    }),
    Location.hasMany(models.Hotel, {
      foreignKey: 'locationId',
      onDelete: 'CASCADE'
    }),
    Location.hasMany(models.VolunteerOp, {
      foreignKey: 'locationId',
      onDelete: 'CASCADE'
    }
    )
  };
  return Location;
};