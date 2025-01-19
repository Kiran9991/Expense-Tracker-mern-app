const express = require("express");
const router = express.Router();

const controller = require("../controller/user");

router.post("/sign-up", controller.addUser);

router.post("/sign-in", controller.signin);

module.exports = router;
