'use strict';
const faker = require('faker');

const realFlights = [
  {
    date: faker.date.future(),
    origin: 5,
    locationId: 1,
    airlineCode: "AA66",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    date: faker.date.future(),
    origin: 5,
    locationId: 2,
    airlineCode: "IB6250",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    date: faker.date.future(),
    origin: 5,
    locationId: 3,
    airlineCode: "TP202",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    date: faker.date.future(),
    origin: 5,
    locationId: 4,
    airlineCode: "AZ609",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    date: faker.date.future(),
    origin: 2,
    locationId: 5,
    airlineCode: "DL127",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

let flights = [...Array(40)].map((flight)=>(
  {
    date: faker.date.future(),
    origin: faker.random.number(1000),
    locationId: faker.random.number({min: 1, max: 40}),
    airlineCode: faker.lorem.words(2),
    createdAt: new Date(),
    updatedAt: new Date()
}
)
)

flights = [...realFlights,...flights];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flights', flights, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flights', null, {});
  }
};
