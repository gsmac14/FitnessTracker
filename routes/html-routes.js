//set routes for sending users to different html pages

//dependecies
var path = require("path");

//Routes
module.exports = function(app) {
    //index route loads home page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //exercise route loads exercise page
    app.get("/exercise", function(req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    //states route loads stats page
    app.get("/stats", function(req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};