'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define('Hotel', {
    name: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
    city: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    pictureUrl: DataTypes.STRING
  }, {});
  Hotel.associate = function(models) {
    // associations can be defined here
    Hotel.belongsTo(models.Location. {
      foreignKey: 'locationId',
      onDelete: 'CASCADE'
    })
  };
  return Hotel;
};