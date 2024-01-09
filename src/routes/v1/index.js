const express = require('express');
const {InfoController} = require('../../controllers')
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes');
const router = express.Router();  // acquiring the router from the express object
router.use('/airplanes' , airplaneRoutes);
router.use('/cities' , cityRoutes);
//setting up my first api
router.use('/airports' , airportRoutes);
router.use('/flights' , flightRoutes);
 router.get('/info' ,InfoController.info);
module.exports = router;
