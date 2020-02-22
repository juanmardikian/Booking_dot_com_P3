'use strict';
const faker = require('faker');

const realLocations = [
  {
    name: "Barcelona, Spain",
    country: "Spain",
    city: "Barcelona",
    propertiesNum: 2930,
    homeNum: 2031,
    contactNumber: "+34 91 27 68 614",
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: "Madrid, Spain",
    country: "Spain",
    city: "Madrid",
    propertiesNum: 3562,
    homeNum: 3123,
    contactNumber: "+34 91 27 68 614",
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: "Lisbon, Portugal",
    country: "Portugal",
    city: "Lisbon",
    propertiesNum: 2768,
    homeNum: 1345,
    contactNumber: "+351 211208095",
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: "Rome, Italy",
    country: "Italy",
    city: "Rome",
    propertiesNum: 3456,
    homeNum: 2130,
    contactNumber: "+39 0683365733",
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: "New York City, USA",
    country: "United States of America",
    city: "New York",
    propertiesNum: 1423,
    homeNum: 217,
    contactNumber: "+1 2125483599",
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let locations = [...Array(40)].map((location) => (
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

locations = [...realLocations,...locations];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', locations, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};