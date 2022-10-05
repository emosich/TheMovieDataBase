const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("logeate aca")
})

module.exports = router;