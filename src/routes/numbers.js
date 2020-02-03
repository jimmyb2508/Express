const express = require('express');

const numbersController = require('../controllers/numbers');

const router = express.Router();

router.get('/add/:a/and/:b', numbersController.addController);

router.get('/subtract/:b/from/:a', numbersController.minusController);

router.post(`/multiply`, numbersController.timesController);

router.post('/divide', numbersController.divideController);

router.post('/remainder', numbersController.remainderController);

module.exports = router;
