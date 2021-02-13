//set routes for sending users to different html pages

//dependecies
var path = require("path");
const router = require("express").Router();
//Routes

//index route loads home page
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//exercise route loads exercise page
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//states route loads stats page
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
