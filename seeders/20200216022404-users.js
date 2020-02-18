'use strict';
const faker = require('faker');

const users = [...Array(40)].map((user) => (
  {
    userName: faker.internet.userName(),
    passwordHash: faker.internet.password(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    middleInit: faker.name.firstName(1),
    homeCountry: faker.address.country(),
    recentViewed: faker.address.city(),
    upcomingTrips: faker.random.number(99999999),
    createdAt: new Date(),
    updatedAt: new Date()
  }
)
)

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', users, {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    
  }
};
