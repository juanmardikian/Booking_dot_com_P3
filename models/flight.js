'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define('Flight', {
    date: DataTypes.DATE,
    origin: DataTypes.INTEGER,
    destination: DataTypes.INTEGER,
    airlineCode: DataTypes.STRING
  }, {});
  Flight.associate = function(models) {
    // associations can be defined here
    Flight.belongsTo(models.Location. {
      foreignKey: 'destination',
      onDelete: 'CASCADE'
    })
  };
  return Flight;
};