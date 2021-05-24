const router = require("express").Router();
const Exercise = require("../models/exercise.model");

router.get("/", function (req, res, next) {
  Exercise.find()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", function (req, res, next) {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", function (req, res, next) {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => (err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", function (req, res, next) {
  Exercise.findByIdDelete(req.params.id)
    .then(() => res.json("Exercise deleted!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.post("/update/:id", function (req, res, next) {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.jon("Exercise updated !"))
        .catch((err) => res.status(400).json("Error : " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
