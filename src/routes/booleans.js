const express = require('express');

const booleansController = require('../controllers/booleans');

const router = express.Router();

router.post('/negate', booleansController.negation);

router.post('/truthiness', booleansController.truth);

router.get('/is-odd/:number', booleansController.odd);

router.get('/:string/starts-with/:letter', booleansController.letterStart);

module.exports = router;
