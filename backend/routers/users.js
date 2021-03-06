const router = require("express").Router();
const User = require("../models/user.model");

router.get("/", function (req, res, next) {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(err));
});

router.post("/add", function (req, res, next) {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
