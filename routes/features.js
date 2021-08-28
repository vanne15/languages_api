var express = require('express');
var router = express.Router();
var Feature = require('../models/feature');
var getFeatureByIdFromRoute = require('./middleware/getFeatureByIdFromRoute');

//const languageFeatures = require('../data/languageFeatures');

/* GET features listing. */
router.get('/', async function (req, res, next) {
  //res.json(languageFeatures);
  try {
    const features = await Feature.find();
    res.json(features);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* GET feature from Id. */
router.get('/:id', getFeatureByIdFromRoute, async function (req, res, next) {
  res.send(res.feature);
});

/* Delete feature from Id. */
router.delete('/:id', getFeatureByIdFromRoute, async function (req, res, next) {
  try {
    await res.feature.remove();
    res.json({ message: 'Feature removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* Put new featureg. */
router.post('/', async function (req, res, next) {

  //language: 'Human', featureId: 2, feature: 'Konstante', example: 'Konstante definieren' }
  const newFeature = new Feature({
    language: req.body.language,
    featureId: req.body.featureId,
    feature: req.body.feature,
    example: req.body.example
  });
  try {
    const createdFeature = await newFeature.save();
    res.status(200).json(createdFeature)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

});

/* Update feature by id. */
router.patch('/:id', getFeatureByIdFromRoute, async function (req, res, next) {

  //language: 'Human', featureId: 2, feature: 'Konstante', example: 'Konstante definieren' }
  if (req.body.language != null) {
    res.feature.language = req.body.language;
  }

  if (req.body.featureId != null) {
    res.feature.featureId = req.body.featureId;
  }

  if (req.body.feature != null) {
    res.feature.feature = req.body.feature;
  }

  if (req.body.example != null) {
    res.feature.example = req.body.example;
  }

  try {
    const updatedFeature = await res.feature.save();
    res.status(200).json(updatedFeature)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

});

module.exports = router;
