const LoginController = require('../../controllers/login.js');
const express = require('express');
const router = express.Router();
router.post('/', LoginController.login_user);

module.exports = router;
