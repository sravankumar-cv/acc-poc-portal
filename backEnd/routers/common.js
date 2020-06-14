/**
 * @fileoverview Express router for common data services routes.
 */

const router = require('express').Router(),
    validationMiddleware = require('../validator/middleware'),
    errorSchema = require('../validator/errorSchema'),
    getAllCountriesController = require('../controllers/common/getCountiesController'),
    getFinancialServiceController = require('../controllers/common/getFinanicalSerivicesController'),
    getBusinessTypeController = require('../controllers/common/getBusinessCategoriesController'),
    searchController = require('../controllers/common/searchController'),
    errorController = require('../controllers/common/serviceErrorController');

router.get('/countries', getAllCountriesController.getCountryList);
router.get('/services', getFinancialServiceController.getFiancialService);
router.get('/business', getBusinessTypeController.getBusinessService);
router.post('/search', searchController.serachByName);
router.post('/error', validationMiddleware(errorSchema), errorController.registerError);

module.exports = router;