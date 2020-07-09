/**
 * @description Express router for provider specifc data.
 * @author Jithin Zacharia
 */

const router = require('express').Router(),
    getAllProviderController = require('../controllers/provider/getProvidersController');

router.get('/all', getAllProviderController.getAllProvider);

module.exports = router;