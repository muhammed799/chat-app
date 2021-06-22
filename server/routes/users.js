var express = require('express');
var router = express.Router();

const user_model = require("../models/users.model")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
