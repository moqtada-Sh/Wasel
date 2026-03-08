const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Incidents API working"
    });
});

module.exports = router;