const router = require("express").Router();
const Workout = require("../models/workout.js");


//create workout
router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate({_id: params.id}, { $push: {exercises: body} }, { new: true })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err =>{
        res.status(400).json(err);
    });
});

    router.get("/api/workouts", ({body}, res) => {
        Workout.aggregate( [{
            $addFields: {
                weightTotal: { $sum: "$weight"}
            }
        }
    ])
        .sort({exercises: -1}).limit(7).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;