const express = require('express');

const arraysController = require('../controllers/arrays');

const router = express.Router();

router.post('/element-at-index/:index', arraysController.index);

router.post('/to-string', arraysController.toString);

router.post('/append', arraysController.append);

router.post('/starts-with-vowel', arraysController.vowel);

router.post('/remove-element', arraysController.element);

module.exports = router;
