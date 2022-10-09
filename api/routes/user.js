const express = require("express");
const router = express.Router();
const passport = require("passport");
const UserController = require("../controllers/usersControllers");

//registrar un user
router.post("/register", UserController.registerUser);

//hacer login
router.post(
  "/login",
  passport.authenticate("local"),
  UserController.loginUsers
);

//logout
router.post("/logout", UserController.logOutUsers);

//devolver un user logueado
router.get("/me", UserController.getMe);

//get de todos los usuarios
router.get("/", UserController.getUsers);

//get un user en particular
router.get("/:id", UserController.getOneUsers);

module.exports = router;
