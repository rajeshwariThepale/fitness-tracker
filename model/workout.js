const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    typeExercise:{
        type:String,
        required: true,
    },
     duration:{
        type:String,
        required: true,
     }, 
     caloriesBurned:{
        type:String,
        required: true,
     }, 
     date:{
        type:Date,
        required: true,
     }
});

const workout = mongoose.model('workout', workoutSchema);
module.exports = workout;

