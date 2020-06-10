const router = require('express').Router();
const getAllCountriesController = require('../controllers/common/getCountiesController');

router.get('/countries', getAllCountriesController.getCountryList);

module.exports = router;