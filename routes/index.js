const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();
const restrict = require('../helper');

router.get('/', (req, res) => res.send('This is root!'));

router.get('/locations', controllers.getLocations);
router.get('/location/:id', controllers.getLocation);

router.get('/user/:id', controllers.getUser);
router.delete('/user/:id', controllers.deleteUser);
router.post('/user', controllers.createUser);
router.put('/user/:id', controllers.updateUser);

router.get('/trip/:id', controllers.getTrip);
router.post('/trip', controllers.createTrip);
router.put('/trip/:id', controllers.updateTrip);
router.delete('/trip/:id', controllers.deleteTrip);

router.get('/location/:id/flights', controllers.getFlights);
router.get('/location/:id/cars', controllers.getCars);
router.get('/location/:id/hotels', controllers.getHotels);
router.get('/location/:id/volunteers', controllers.getVolunteers);

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.post('/change-password', controllers.changePassword)
// router.post('/items', restrict, controllers.createItem)
// router.put('/items/:id', restrict, controllers.updateItem)
// router.delete('/items/:id', restrict, controllers.deleteItem)
// router.get('/users/:id/items', restrict, controllers.getUserItems)

module.exports = router
