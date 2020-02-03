const express = require('express');

const stringsController = require('../controllers/strings');

const router = express.Router();

router.get('/hello/:string', stringsController.hello);

router.get('/upper/:hello', stringsController.upper);

router.get('/lower/:HELLO', stringsController.lower);

router.get('/first-characters/:string?', stringsController.character);

module.exports = router;
