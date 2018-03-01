var express = require('express');
var router = express.Router();
const User = require('../controller/users')
/* GET users listing. */
router.post('/signup',User.signup),
router.post('/signin',User.signin)

module.exports = router;
