const router = require("express").Router();
const path = require("path");
//routes to render the html

router.get("/", ({ res }) => {
  console.log("/");
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", ({ res }) => {
  console.log("/exercise");

  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", ({ res }) => {
  console.log("/stats");

  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
