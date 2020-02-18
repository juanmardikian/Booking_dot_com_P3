'use strict';
const faker = require('faker');

const carRentals = [...Array(40)].map((rental)=>(
  {
    companyName: faker.lorem.words(3),
    carNum: faker.random.number(200),
    locationId: faker.random.number({min: 1, max: 40}),
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
