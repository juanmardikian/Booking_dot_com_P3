'use strict';
const faker = require('faker');

const volunteerOps = [...Array(40)].map((op)=>(
  {
    name: faker.lorem.words(3),
    type: faker.lorem.words(2),
    locationId: faker.random.number(1000),
    pictureUrl: faker.image.imageUrl(),
    createdAt: new Date(),
    updatedAt: new Date()
}
)
)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VolunteerOps', volunteerOps, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VolunteerOps', null, {});
  }
};
