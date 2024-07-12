const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const workoutController = require('../controller/workoutController');
const dietController = require('../controller/dietController');
const authController = require('../middleware/auth');

//user routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

//workout routes
router.post('/workouts', workoutController.addWorkout);
router.get('/allWorkouts',authController, workoutController.getAllWorkouts);
router.put('/workouts/:id',authController, workoutController.updateWorkoutById);
router.delete('/deleteWorkouts/:id', workoutController.deleteWorkoutById);

//diet routes
router.post('/diets',dietController.addPlan);
router.get('/allDiets',authController, dietController.getAllDietPlan);
router.put('/diets/:id',authController, dietController.updatePlansById);
router.delete('/deleteDiets/:id',dietController.deletePlansById);

module.exports = router;