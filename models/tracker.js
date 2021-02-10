const mongoose = require("mongoose");

const Schema = mongoose.Schema

const trackerSchema = new Schema({
    day: {
        type: Date,
        default:Date.now
    },
    exercises: {
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }
});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker