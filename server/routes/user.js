const express = require("express");
const router = express.Router();

const controller = require("../controller/user");

router.post("/signup", controller.addUser);

router.post("/signin", controller.signin);

module.exports = router;
