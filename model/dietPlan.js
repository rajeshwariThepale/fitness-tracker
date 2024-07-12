const mongoose = require('mongoose');

const dietPlanSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    meals:{
        type: String,
        required: true,
    }
});

const dietPlan = mongoose.model('dietPlan',dietPlanSchema);
module.exports = dietPlan;

