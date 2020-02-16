const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Location, Trip, Flight, CarRental } = require('../models');

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
      attributes: ['id', 'date', 'origin', ['locationId','destination'], 'airlineCode'],
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
      attributes: ['id', 'dateStart', 'companyName', 'carClass', 'numberOfDays', ['locationId','pickUpCity'], 'dropOffCity'],
      where: { locationId: id }
    })
    if (cars) {
      return res.status(200).json({ cars });
    }
    return res.status(404).send(`No cars at this location`);
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

module.exports = {
  getLocations,
  getLocation,
  getTrip,
  getFlights,
  getCars
}

