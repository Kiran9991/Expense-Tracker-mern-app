const express = require("express");

const router = express.Router();

const controller = require("../controller/sendEmail");

router.post("/reset-password", controller.sendEmail);

module.exports = router;
