const express = require('express');

const router = express.Router();

const controller = require('../controller/chat');

router.post('/send', controller.addMessages);

router.get('/messages', controller.getMessages);

router.get('/users', controller.getUsers);

module.exports = router;