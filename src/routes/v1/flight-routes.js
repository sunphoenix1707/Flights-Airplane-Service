const express = require('express');

const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/flights POST
router.post('/', 
        FlightMiddlewares.validateCreateRequest,
        FlightController.createFlight);
        // /api/v1/flights?trips=MUM-DEL
router.get('/', 
        FlightController.getAllFlights);
        // /api/v1/flights?trips=MUM-DEL
        // localhost:3000/api/v1/flights?trips=MUM-DEL&price=1000&travellers=2&tripDate=2023-01-19&sort=departureTime_ASC,price_DESC
router.get('/:id', 
        FlightController.getFlight);
router.patch(
        '/:id/seats', 
        FlightMiddlewares.validateUpdateSeatsRequest,
        FlightController.updateSeats
        );

module.exports = router;