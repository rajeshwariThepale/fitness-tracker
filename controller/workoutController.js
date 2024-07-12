const Workout = require('../model/workout');

const addWorkout = async(req, res)=>{
    try{
        const{typeExercise, duration, caloriesBurned, date} = req.body;

        const workouts = new Workout({typeExercise, duration, caloriesBurned, date});
        await workouts.save();
        res.status(201).send(workouts);
        
    }catch(error){
        res.status(500).send(error.message);

    }
};

const getAllWorkouts = async(req, res)=>{

    try{
        const allWorkout = await Workout.find({},{__v:0});
        res.status(200).send(allWorkout);

    }catch(error){
        res.status(500).send(error.message);
    }
};

const updateWorkoutById = async(req, res)=>{

    const {id} = req.params;
    const {typeExercise, duration, caloriesBurned, date} = req.body;

    try{
        const updatedWorkout = await Workout.findById(id);
        if(!updatedWorkout){
            res.status(404).json({message:"Workout not found"});
        }

        updatedWorkout.typeExercise = typeExercise || updatedWorkout.typeExercise;
        updatedWorkout.duration = duration || updatedWorkout.duration;
        updatedWorkout.caloriesBurned = caloriesBurned || updatedWorkout.caloriesBurned;
        updatedWorkout.date = date || updatedWorkout.date;
        await updatedWorkout.save();

        res.status(201).send(updatedWorkout);
        // console.log(updatedWorkout);

    }catch(error){
        res.status(500).send(error.message);
    }

};


const deleteWorkoutById = async (req,res) => {

    try{
        const deletedWorkout = await Workout.findByIdAndDelete(req.params.id)
        if (!deletedWorkout) {
             res.status(404).json({ message: 'Workout not found' });
          }
          res.json({ message: 'your workout deleted' });
    } catch(error){
        res.status(500).send(error.message);
    }

}

module.exports ={addWorkout, getAllWorkouts,updateWorkoutById, deleteWorkoutById} 
