const {StatusCodes} = require('http-status-codes');
const {AirplaneService} = require('../services');
const {SuccessResponse , ErrorResponse} = require('../utils/common');
// ** /airplanes post  req-body {modelNumber: airbus  ,  capacity:500} ** //
async function createAirplane(req,res) {
         try {
                const airplane = await AirplaneService.createAirplane({
                modelNumber : req.body.modelNumber,
                 capacity : req.body.capacity
             });
             SuccessResponse.data = airplane;
             return res
                         .status(StatusCodes.CREATED)
                         .json(SuccessResponse);

} catch(error) {
    ErrorResponse.error = error;
    return res  
              .status(error.statusCode)
               .json(ErrorResponse);
}
}
 /**
  * POST : /airplanes
  * req-body {}
  */
async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}
 /**
  * POST : /airplanes:id
  * req-body {}
  */
async function getAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}
 /**
  * DELETE : /airplanes:id
  * req-body {}
  */
async function destroyAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}
 /**
  * patch : /airplanes:id
  * req-body {capacity:250}
  */
 async function updateAirplane(req,res)
{
    try{ 

         const airplanes = await AirplaneService.updateAirplane({
            Capacity : req.body.Capacity
         },req.params.id);
         SuccessResponse.data = airplanes;

         return res.
                   status(StatusCodes.CREATED)
                  .json( SuccessResponse );

    }catch(error) 
    {
        ErrorResponse.error = error 
        return res
                  .status(error.statusCode) //Error has Self Property statusCode we simply not write again we just
                                            //Pass it with statusCode
                  .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
   updateAirplane
}