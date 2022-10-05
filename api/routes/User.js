const express = require("express");
const {User} = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
    User.findAll()
      .then((data) => res.send(data))
      .catch((err) => console.log(err));
  });

router.post("/", (req, res) => {
    const {name, email, password} = req.body
    User.create({name, email, password})
    .then((result) => {
        res.status(201).send(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    });
})

router.get("/:id", (req, res) => {
    const {id} = req.params

    User.findByPk(id).then((result) => res.send(result))
})


  module.exports = router;