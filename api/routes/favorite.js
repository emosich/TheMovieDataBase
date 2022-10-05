const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("tus favoritos aca")
})

module.exports = router;