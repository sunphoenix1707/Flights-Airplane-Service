const express = require('express');
const {InfoController} = require('../../controllers')
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const router = express.Router();  // acquiring the router from the express object
router.use('/airplanes' , airplaneRoutes);
router.use('/Cities' , cityRoutes);
//setting up my first api
 router.get('/info' ,InfoController.info);
module.exports = router;
