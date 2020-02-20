const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();
const restrict = require('../helper');

router.get('/', (req, res) => res.send('This is root!'));

router.get('/locations', controllers.getLocations);
router.get('/locations/:cityname', controllers.getLocationId);
router.get('/location/:id', controllers.getLocation);

router.get('/user/:id', restrict, controllers.getUser);
router.delete('/user/:id', controllers.deleteUser);
router.put('/user/:id', controllers.updateUser);

router.get('/trip/:id', restrict, controllers.getTrip);
router.post('/trip', controllers.createTrip);
router.put('/trip/:id', controllers.updateTrip);
router.delete('/trip/:id', controllers.deleteTrip);

router.get('/location/:id/flights', controllers.getFlights);
router.get('/location/:id/cars', controllers.getCarRentals);
// get all cars for that location
router.get('/location/:id/cars/:carid', controllers.getAllCars);
router.get('/location/:id/hotels', controllers.getHotels);
router.get('/location/:id/volunteers', controllers.getVolunteers);

router.post('/sign-up', controllers.signUp);
router.post('/sign-in', controllers.signIn);
router.post('/change-password', controllers.changePassword);


module.exports = router
