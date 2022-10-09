const express = require("express");
const router = express.Router();
const MoviesControllers = require("../controllers/moviesControllers");

//get populares
router.get("/popular", MoviesControllers.getPopulars);

//get proximas
router.get("/upcoming", MoviesControllers.getUpcoming);

//get una sola
router.get("/:id", MoviesControllers.getMovie);

//get por genero
router.get("/:id", MoviesControllers.getByGener);

//get por busqueda
router.get("/search", MoviesControllers.getSearch);

module.exports = router;
