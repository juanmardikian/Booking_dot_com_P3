const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Location, Trip, Flight, CarRental, Hotel, VolunteerOp, User } = require('../models');

const SALT_ROUNDS = 11;
const TOKEN_KEY = 'areallylonggoodkey';

const getLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();
    return res.status(200).json({ locations });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findOne({
      where: { id: id }
    })
    if (location) {
      return res.status(200).json({ location });
    }
    return res.status(404).send(`Location with id: ${id} does not exist`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getFlights = async (req, res) => {
  try {
    const { id } = req.params;
    const flights = await Flight.findAll({
      attributes: ['id', 'date', 'origin', ['locationId', 'destination'], 'airlineCode'],
      where: { locationId: id }
    })
    if (flights) {
      return res.status(200).json({ flights });
    }
    return res.status(404).send(`Location has no flights`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getCars = async (req, res) => {
  try {
    const { id } = req.params;
    const cars = await CarRental.findAll({
      attributes: ['id', 'dateStart', 'companyName', 'carClass', 'numberOfDays', ['locationId', 'pickUpCity'], 'dropOffCity'],
      where: { locationId: id }
    })
    if (cars.length > 0) {
      return res.status(200).json({ cars });
    }
    return res.status(404).send(`No cars at this location`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getHotels = async (req, res) => {
  try {
    const { id } = req.params;
    const hotels = await Hotel.findAll({
      where: { locationId: id }
    })
    if (hotels.length > 0) {
      return res.status(200).json({ hotels });
    }
    return res.status(404).send(`No hotels at this location`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getVolunteers = async (req, res) => {
  try {
    const { id } = req.params;
    const volunteers = await VolunteerOp.findAll({
      where: { locationId: id }
    })
    if (volunteers.length > 0) {
      return res.status(200).json({ volunteers });
    }
    return res.status(404).send(`No volunteer opportunities at this location`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}



const getTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const trip = await Trip.findOne({
      where: { id: id }
    })
    if (trip) {
      return res.status(200).json({ trip });
    }
    return res.status(404).send(`Trip with id: ${id} does not exist`);

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id: id }
    })
    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).send('User does not exist');

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const trip = await Trip.findOne({
      where: { id: id }
    });
    if (!trip) {
      return res.status(404).send('Trip does not exist');
    }
    const [updated] = await Trip.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedTrip = await Trip.findOne({ where: { id: id } });
      return res.status(200).json({ trip: updatedTrip });
    }
    throw new Error('User not updated');

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Trip.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send('Trip deleted');
    }
    throw new Error('Trip not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const createTrip = async (req, res) => {
  try {
    const user = await Trip.create(req.body);
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getLocations,
  getLocation,
  getTrip,
  getFlights,
  getCars,
  getHotels,
  getVolunteers,
  getUser,
  updateTrip,
  deleteTrip,
  createTrip
}

