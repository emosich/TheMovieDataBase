const express = require("express");
const router = express.Router();
const FavoritesControllers = require("../controllers/favoritesControllers");

//todos los favoritos
router.get("/:userId", FavoritesControllers.getFavorites);

//un fav solo
router.get("/:one:id", FavoritesControllers.getOneFavorite);

//agregar un fav
router.post("/:id", FavoritesControllers.savefavorites);

//eliminar un fav
router.delete("/:id", FavoritesControllers.deletefavorite);

module.exports = router;
