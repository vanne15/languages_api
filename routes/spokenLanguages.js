var express = require('express');
var router = express.Router();

const spokenLanguages = require('../data/spokenLanguages');

/* GET spokenLanguages listing. */
router.get('/', function (req, res, next) {
  res.json(spokenLanguages);
});

module.exports = router;
