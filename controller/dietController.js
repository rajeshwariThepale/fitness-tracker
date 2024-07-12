const DietPlan = require('../model/dietPlan');

const addPlan = async(req, res)=>{
    try{
        const{name,description,meals} = req.body;

        const dietPlans = new DietPlan({name,description,meals});
        await dietPlans.save();
        res.status(201).send({msg: 'new diet plan created successfully',dietPlans});

    }catch(error){
        res.status(500).send(error.message);

    }
};

const getAllDietPlan = async(req, res)=>{

    try{
        const allPlans = await DietPlan.find({},{__v:0});
        res.status(200).send(allPlans);

    }catch(error){
        res.status(500).send(error.message);
    }
};

const updatePlansById = async(req, res)=>{

    const {id} = req.params;
    const {name,description,meals} = req.body;

    try{
        const updatedPlans = await DietPlan.findById(id);
        if(!updatedPlans){
            res.status(404).json({message:"Diet Plan not found"});
        }

        updatedPlans.name = name || updatedPlans.name;
        updatedPlans.description = description || updatedPlans.description;
        updatedPlans.meals = meals || updatedPlans.meals;
        await updatedPlans.save();
        res.status(201).send({msg: 'your diet plan updated successfully', updatedPlans});

    }catch(error){
        res.status(500).send(error.message);
    }

};

const deletePlansById = async (req,res) => {

    try{
        const deletedDietPlan = await DietPlan.findByIdAndDelete(req.params.id)
        if (!deletedDietPlan) {
            res.status(404).json({ message: 'plan not found' });
          }
          res.json({ message: 'your diet plan deleted' });
    } catch(error){
        res.status(500).send(error.message);
    }

}


module.exports ={addPlan, getAllDietPlan, updatePlansById, deletePlansById} 
