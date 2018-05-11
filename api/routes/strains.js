const express = require('express');
const passport = require('passport');
const router = express.Router();
require('../../config/passport')(passport);
const jwt = require('jsonwebtoken');
const StrainsController = require('../../controllers/strains');

router.get('/', StrainsController.get_strains);
router.post('/:strainId', StrainsController.search_strain);
router.get('/:strainId', passport.authenticate('jwt', { session: false }), StrainsController.get_specific_strain);

module.exports = router;
