const express = require('express');
const {InfoController} = require('../../controllers')
const airplaneRoutes = require('./airplane-routes');
const router = express.Router();  // acquiring the router from the express object
router.use('/airplanes' , airplaneRoutes);
//setting up my first api
 router.get('/info' ,InfoController.info);
module.exports = router;
