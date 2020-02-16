'use strict';
const faker = require('faker');

const flights = [...Array(40)].map((flight)=>(
  {
    date: faker.date.future(),
    origin: faker.random.number(1000),
    destination: faker.random.number(1000),
    airlineCode: faker.lorem.words(2),
    createdAt: new Date(),
    updatedAt: new Date()
}
)
)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flights', flights, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flights', null, {});
  }
};
