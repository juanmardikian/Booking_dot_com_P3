'use strict';
const faker = require('faker');

const trips = [...Array(40)].map((trip)=>(
  {
    userId: faker.random.number({min: 1, max: 40}),
    dateStart: faker.date.past(),
    dateComplete: faker.date.future(),
    destination: faker.random.number(1000),
    hotel: faker.lorem.words(3),
    flight: faker.lorem.words(2),
    carRental: faker.lorem.words(2),
    volunteerOp: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: new Date()
}
)
)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trips', trips, {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Trips', null, {});
    
  }
};
