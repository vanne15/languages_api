const mongoose = require('mongoose');

//language: 'Human', featureId: 2, feature: 'Konstante', example: 'Konstante definieren' }

const FeatureSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true
    },
    featureId: {
        type: Number,
        required: true
    },
    feature: {
        type: String,
        required: true
    },
    example: {
        type: String,
        required: false
    }

})
module.exports = mongoose.model('Feature', FeatureSchema);