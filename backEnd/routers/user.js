/**
 * @description Router for all user related API
 * @author Jithin Zacharia
 */

const router = require('express').Router(),
    JWTCertifier = require('../helpers/JWTCertifier'),
    getAllUserByIdContoller = require('../controllers/user/getAllUserByIdContoller'),
    getAllUserController = require('../controllers/user/getAllUserController'),
    getAllUserByRoleController = require('../controllers/user/getUsersByRoleController'),
    getUserDetailsContoller = require('../controllers/user/getUserDetailsController');

router.get('/all', JWTCertifier.verifyJWT, getAllUserController.getAllUsers);
router.get('/role/:role', JWTCertifier.verifyJWT, getAllUserByRoleController.getUserByRole)
router.get('/details', JWTCertifier.verifyJWT, getUserDetailsContoller.getUserDetails);
router.get('/details/:id', JWTCertifier.verifyJWT, getAllUserByIdContoller.getUserById);

module.exports = router;