'use strict';
const faker = require('faker');

const locations = [...Array(40)].map((location)=>(
  {
    name: faker.lorem.words(3),
    country: faker.address.country(),
    city: faker.address.city(),
    propertiesNum: faker.random.number(10000),
    homeNum: faker.random.number(10000),
    contactNumber: faker.phone.phoneNumber(),
    pictureUrl: faker.image.imageUrl(),
    createdAt: new Date(),
    updatedAt: new Date()

}
)
)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', locations, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
