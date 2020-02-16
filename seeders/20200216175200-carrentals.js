'use strict';
const faker = require('faker');

const carRentals = [...Array(40)].map((rental)=>(
  {
    dateStart: faker.date.future(),
    companyName: faker.lorem.words(3),
    carClass: faker.lorem.words(1),
    numberOfDays: faker.random.number(20),
    locationId: faker.random.number(40),
    dropOffCity: faker.random.number(1000),
    createdAt: new Date(),
    updatedAt: new Date()
}
)
)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CarRentals', carRentals, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CarRentals', null, {});
  }
};
