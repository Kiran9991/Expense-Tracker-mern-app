const express = require('express');
const router = express.Router();

const controller = require('../controller/user');

router.post('/data', controller.addUser);

module.exports = router;