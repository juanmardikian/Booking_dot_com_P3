'use strict';
const faker = require('faker');

const realHotels = [
  {
    name: "The Cotton House",
    locationId: 1,
    city: "Barcelona",
    contactNumber: "+34 934 50 50 45",
    address: "Gran Via de les Corts Catalanes, 670, 08010 Barcelona, Spain",
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    availableRooms: faker.random.number(30),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Relais & Chateaux Heritage Madrid Hotel",
    locationId: 2,
    city: "Madrid",
    contactNumber: "+34 910 88 70 70",
    address: "Calle de Diego de León, 43, 28006 Madrid, Spain",
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    availableRooms: faker.random.number(30),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Pestana Palace Lisboa",
    locationId: 3,
    city: "Lisbon",
    contactNumber: "+351 21 361 5600",
    address: "R. Jau 54, 1300-314 Lisboa, Portugal",
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    availableRooms: faker.random.number(30),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "The St. Regis Rome",
    locationId: 4,
    city: "Rome",
    contactNumber: "+39 06 47091",
    address: "Via Vittorio E. Orlando 3, 00185 Roma RM, Italy",
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    availableRooms: faker.random.number(30),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "The Plaza",
    locationId: 5,
    city: "New York",
    contactNumber: "+1 (212) 759-3000",
    address: "768 5th Ave, New York, NY 10019",
    pictureUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
    availableRooms: faker.random.number(30),
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

let hotels = [...Array(40)].map((hotel)=>(
  {
    name: faker.lorem.words(3),
    locationId: faker.random.number({min: 1, max: 40}),
    city: faker.address.city(),
    contactNumber: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(),
    pictureUrl: faker.image.imageUrl(),
    availableRooms: faker.random.number(30),
    createdAt: new Date(),
    updatedAt: new Date()
}
)
)

hotels = [...realHotels,...hotels]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hotels', hotels, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hotels', null, {});
  }
};