'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middleInit: DataTypes.STRING,
    homeCountry: DataTypes.STRING,
    recentViewed: DataTypes.STRING,
    upcomingTrips: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Trip,{
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return User;
};