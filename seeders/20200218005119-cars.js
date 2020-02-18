'use strict';
const faker = require('faker');

const cars = [...Array(40)].map((car)=>(
  {
    dateStart: faker.date.future(),
    carRentalId: faker.random.number(40),
    carClass: faker.random.word(),
    numberOfDays: faker.random.number({min: 1, max:14}),
    pickUpCity: faker.address.city(),
    dropOffCity: faker.address.city(),
    isAvailable: faker.random.boolean(),
    dailyRate: faker.random.number({min: 25, max:100}),
    createdAt: new Date(),
    updatedAt: new Date()
}
)
)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cars', cars, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
