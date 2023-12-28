const express = require('express');
const {InfoController} = require('../../controllers')
const router = express.Router();  // acquiring the router from the express object

//setting up my first api
 router.get('/info' ,InfoController.info);
module.exports = router;
