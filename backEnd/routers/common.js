const router = require('express').Router(),
    getAllCountriesController = require('../controllers/common/getCountiesController'),
    getFinancialServiceController = require('../controllers/common/getFinanicalSerivicesController'),
    getBusinessTypeController = require('../controllers/common/getBusinessCategoriesController'),
    searchController = require('../controllers/common/searchController');

router.get('/countries', getAllCountriesController.getCountryList);
router.get('/services', getFinancialServiceController.getFiancialService);
router.get('/business', getBusinessTypeController.getBusinessService);
router.post('/search', searchController.serachByName);

module.exports = router;