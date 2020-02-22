'use strict';
const faker = require('faker');

const realVolunteerOps = [
  {
    name: 'Save The Whales',
    type: 'Animal conservation',
    locationId: 1,
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    description: "Volunteer to clean the oceans of plastic and save whales from suffocation",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Habitat for Humanity',
    type: 'Construction',
    locationId: 2,
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    description: "Work in a team to build a house for the needy",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Soup For The Needy',
    type: 'Soup Kitchen',
    locationId: 3,
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    description: "Volunteer to serve meals to the needy in the community",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Cleaner Oceans',
    type: 'Trash collection',
    locationId: 4,
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    description: "Pick up trash to clean up the beaches",
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    name: 'Toys for Tots',
    type: 'Gift Collection',
    locationId: 5,
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    description: "Collect toys for underprivileged children",
    createdAt: new Date(),
    updatedAt: new Date()
  }]

let volunteerOps = [...Array(40)].map((op) => (
  {
    name: faker.lorem.words(3),
    type: faker.lorem.words(2),
    locationId: faker.random.number({ min: 1, max: 40 }),
    pictureUrl: faker.image.imageUrl(),
    description: faker.lorem.words(10),
    createdAt: new Date(),
    updatedAt: new Date()
  }
)
)

volunteerOps = [...realVolunteerOps, ...volunteerOps]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VolunteerOps', volunteerOps, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VolunteerOps', null, {});
  }
};