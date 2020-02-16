const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
// const restrict = require('../helpers')

router.get('/', (req, res) => res.send('This is root!'))

router.get('/locations', controllers.getLocations);
router.get('/location/:id', controllers.getLocation);


router.get('/trip/:id', controllers.getTrip);
router.get('/location/:id/flights', controllers.getFlights);
router.get('/location/:id/cars', controllers.getCars)

// router.post('/sign-up', controllers.signUp)
// router.post('/sign-in', controllers.signIn)
// router.post('/change-password', controllers.changePassword)

// router.get('/items', controllers.getAllItems)
// router.get('/items/:id', controllers.getItemById)
// router.post('/items', restrict, controllers.createItem)
// router.put('/items/:id', restrict, controllers.updateItem)
// router.delete('/items/:id', restrict, controllers.deleteItem)
// router.get('/users/:id/items', restrict, controllers.getUserItems)

module.exports = router
