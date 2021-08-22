var express = require('express');
var router = express.Router();

const languageFeatures = require('../data/languageFeatures');

/* GET features listing. */
router.get('/', function (req, res, next) {
  res.json(languageFeatures);
});

module.exports = router;
