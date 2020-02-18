'use strict';
const faker = require('faker');

const volunteerOps = [...Array(40)].map((op)=>(
  {
    name: faker.lorem.words(3),
    type: faker.lorem.words(2),
    locationId: faker.random.number({min: 1, max: 40}),
    pictureUrl: faker.image.imageUrl(),
    description: faker.lorem.words(10),
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
