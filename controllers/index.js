const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Location, Trip, Flight, CarRental, Hotel, VolunteerOp, User, Car } = require('../models');
const Sequelize = require('sequelize');

const SALT_ROUNDS = 11;
const TOKEN_KEY = 'notallkeysopenalldoors';

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const passwordDigest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await User.create({
      userName: username,
      email: email,
      passwordHash: passwordDigest
    })
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email
    }
    const token = jwt.sign(payload, TOKEN_KEY);
    return res.status(201).json({ user, token })
  } catch (error) {
    console.log("Error signing up");
    return res.status(400).json({ error: error.message });
  }
}

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { userName: username }
    })
    if (await bcrypt.compare(password, user.dataValues.passwordHash)) {
      const payload = {
        id: user.id,
        username: user.userName,
        email: user.email
      }
      const token = jwt.sign(payload, TOKEN_KEY);
      return res.status(201).json({ user, token });
    } else {
      res.status(401).send('Invalid Credentials');
    }

  } catch (error) {
    console.log("Error logging in");
    return res.status(500).json({ error: error.message });
  }
}

const changePassword = async (req, res) => {
  try {
    const { username, password } = req.body;
    const passwordDigest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await User.findOne({
      where: { userName: username }
    })
    if (!user) {
      return res.status(404).send('User does not exist');
    }

    user.passwordHash = passwordDigest;
    console.log(user.passwordHash);
    console.log(passwordDigest);
    await user.save();

    const updatedUser = await User.findOne({ where: { userName: username } });
    return res.status(200).json({ user: updatedUser })


  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


const getLocations = async (req, res) => {
  try {
    // returns 5 random locations
    const locations = await Location.findAll({
      order: Sequelize.literal('random()'),
      limit: 5
    });
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
    return res.status(404).send(`Location has no flights available`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getCarRentals = async (req, res) => {
  try {
    const { id } = req.params;
    const cars = await CarRental.findAll({
      attributes: ['id', 'companyName', 'carNum', ['locationId', 'pickUpCity']],
      where: { locationId: id }
    })
    if (cars.length > 0) {
      return res.status(200).json({ cars });
    }
    return res.status(404).send(`No car rental services at this location`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getCars = async (req, res) => {
  try {
    const { carid } = req.params;
    const cars = await Car.findAll({
      where: { carRentalId: carid }
    })
    if (cars.length> 0){
      return res.status(200).json({ cars })
    }
    return res.status(404).send('No cars available at this lcoation');
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
    return res.status(404).send(`No hotels available at this location`);
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

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send('User deleted');
    }
    throw new Error('User not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const createUser = async (req, res) => {
  try {
    console.log("WTF:", req.body);
    const user = await User.create(req.body);
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id: id }
    });
    if (!user) {
      return res.status(404).send('User does not exist');
    }
    const [updated] = await User.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedUser = await User.findOne({ where: { id: id } });
      return res.status(200).json({ user: updatedUser });
    }
    throw new Error('User not updated');

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
    throw new Error('Trip not updated');

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
    const trip = await Trip.create(req.body);
    return res.status(201).json({ trip });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getLocations,
  getLocation,
  getTrip,
  getFlights,
  getCarRentals,
  getCars,
  getHotels,
  getVolunteers,
  getUser,
  updateTrip,
  deleteTrip,
  createTrip,
  deleteUser,
  createUser,
  updateUser,
  signIn,
  signUp,
  changePassword
}

