var express = require('express');
var router = express.Router();

const resultLanguages = require('../data/resultLanguages');

/* GET languages listing. */
router.get('/', function (req, res, next) {
  res.json(resultLanguages);
});

module.exports = router;
