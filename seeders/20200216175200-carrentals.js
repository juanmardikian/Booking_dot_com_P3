'use strict';
const faker = require('faker');

const realCarRentals = [
  {
    companyName: "Sixt",
    carNum: 37,
    locationId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    companyName: "EuropCar",
    carNum: 25,
    locationId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    companyName: "Enterprise",
    carNum: 52,
    locationId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    companyName: "Hertz",
    carNum: 33,
    locationId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    companyName: "Alamo",
    carNum: 43,
    locationId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

let carRentals = [...Array(40)].map((rental)=>(
  {
    companyName: faker.lorem.words(3),
    carNum: faker.random.number(200),
    locationId: faker.random.number({min: 1, max: 40}),
    createdAt: new Date(),
    updatedAt: new Date()
}
)
)

carRentals = [...realCarRentals,...carRentals];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CarRentals', carRentals, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CarRentals', null, {});
  }
};
