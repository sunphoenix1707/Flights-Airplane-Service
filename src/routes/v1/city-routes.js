const express = require('express');

const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/cities POST
router.post('/', 
        CityMiddlewares.validateCreateRequest,
        CityController.createCity);
router.delete('/:id', 
CityController.destroyCity);
/*/api/v1/cities - PATCH
Req Body: {name:anything }
*/
router.patch('/:id',CityController.updateCity);
module.exports = router;