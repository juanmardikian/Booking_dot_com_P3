'use strict';
module.exports = (sequelize, DataTypes) => {
  const VolunteerOp = sequelize.define('VolunteerOp', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
    pictureUrl: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  VolunteerOp.associate = function(models) {
    // associations can be defined here
    VolunteerOp.belongsTo(models.Location, {
      foreignKey: 'locationId',
      onDelete: 'CASCADE'
    })
  };
  return VolunteerOp;
};