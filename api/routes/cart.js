const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../../config/passport')(passport);
const jwt = require('jsonwebtoken');
const CartController = require('../../controllers/cart');

router.post('/', passport.authenticate('jwt', { session: false }), CartController.update_cart);
router.get('/', passport.authenticate('jwt', { session: false }), CartController.get_cart);
router.delete('/', CartController.remove_cart_item);

module.exports = router;
