const router = require('express').Router(),
        adminRegisterController = require('../controllers/admin/adminRegisterController'),
        adminLoginController = require('../controllers/admin/adminLoginController'),
        adminLogoutController = require('../controllers/admin/adminLogoutController'),
        JWTCertifier = require('../helpers/JWTCertifier'),
        requestValidator = require('../validator/middleware'),
        adminLoginValidator = require('../validator/adminLoginSchema'),
        adminRegisterValidator = require('../validator/adminRegisterSchema');

router.post('/register', requestValidator(adminRegisterValidator), adminRegisterController.adminRegister);
router.post('/login', requestValidator(adminLoginValidator), adminLoginController.adminLogin);
router.post('/logout', JWTCertifier.verifyJWT, adminLogoutController.adminLogout);

module.exports = router;