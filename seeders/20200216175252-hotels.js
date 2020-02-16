'use strict';
const faker = require('faker');

const hotels = [...Array(40)].map((hotel)=>(
  {
    name: faker.lorem.words(3),
    locationId: faker.random.number(1000),
    city: faker.address.city(),
    contactNumber: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(),
    pictureUrl: faker.image.imageUrl(),
    createdAt: new Date(),
    updatedAt: new Date()
}
)
)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hotels', hotels, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hotels', null, {});
  }
};
