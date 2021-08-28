var Feature = require('./../../models/feature');
// var express = require('express');
// var router = express.Router();

async function getFeatureByIdFromRoute(req, res, next) {
    let feature;
    try {
        feature = await Feature.findById(req.params.id);
        if (feature == null) {
            return res.status(404).json({ message: 'Feature not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.feature = feature;
    next();
}
module.exports = getFeatureByIdFromRoute;