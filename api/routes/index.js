const express = require("express");
const router = express.Router();
const userRouter = require("./User");
const loginRouter = require("./login");
const favoriteRouter = require("./favorite");
const movieDetailRouter = require("./movieDetail");


router.get('/', function (req, res) {
    res.send('Hello World')
  })

router.use("/user", userRouter);
router.use("/login", loginRouter);
router.use("/favorite", favoriteRouter);
router.use("/movieDetail", movieDetailRouter);



module.exports = router;
