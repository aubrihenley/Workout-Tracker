const router = require("express").Router();
const path = require("path");
//routes to render the html

router.get("/", (req, res) => {
  console.log("/");
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  console.log("/stats");

  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
