const express = require('express');

const router = express.Router();

const controller = require('../controller/resetPassword');

router.post('/reset-password', controller.resetPassword);

module.exports = router;