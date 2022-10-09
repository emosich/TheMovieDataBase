const express = require("express");
const router = express.Router();
const ShowsControllers = require("../controllers/showsControllers");

//get populares
router.get("/popular", ShowsControllers.getPopulars);

//get proximamente
router.get("/upcoming", ShowsControllers.getUpcoming);

//get un show solo
router.get("/:id", ShowsControllers.getShow);

//get por genero
router.get("/gener/:id", ShowsControllers.getByGener);

//get por busqueda
router.get("/search", ShowsControllers.getSearch);

module.exports = router;
