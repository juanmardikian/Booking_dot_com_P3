'use strict';
const faker = require('faker');

const realCars = [
  {
    dateStart: faker.date.future(),
    carRentalId: 1,
    carClass: "Sedan",
    numberOfDays: faker.random.number({min: 1, max:14}),
    pickUpCity: 1,
    dropOffCity: 1,
    isAvailable: true,
    dailyRate: faker.random.number({min: 25, max:100}),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    dateStart: faker.date.future(),
    carRentalId: 2,
    carClass: "SUV",
    numberOfDays: faker.random.number({min: 1, max:14}),
    pickUpCity: 2,
    dropOffCity: 2,
    isAvailable: true,
    dailyRate: faker.random.number({min: 25, max:100}),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    dateStart: faker.date.future(),
    carRentalId: 3,
    carClass: "Coupe",
    numberOfDays: faker.random.number({min: 1, max:14}),
    pickUpCity: 3,
    dropOffCity: 3,
    isAvailable: true,
    dailyRate: faker.random.number({min: 25, max:100}),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    dateStart: faker.date.future(),
    carRentalId: 4,
    carClass: "Hybrid",
    numberOfDays: faker.random.number({min: 1, max:14}),
    pickUpCity: 4,
    dropOffCity: 4,
    isAvailable: true,
    dailyRate: faker.random.number({min: 25, max:100}),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    dateStart: faker.date.future(),
    carRentalId: 5,
    carClass: "Sport",
    numberOfDays: faker.random.number({min: 1, max:14}),
    pickUpCity: 5,
    dropOffCity: 5,
    isAvailable: true,
    dailyRate: faker.random.number({min: 125, max:200}),
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let cars = [...Array(40)].map((car)=>(
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

cars = [...realCars,...cars];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cars', cars, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
