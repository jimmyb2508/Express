const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

const addController = (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(a, b) });
};

const minusController = (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(a, b) });
};

const timesController = (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(req.body.a, req.body.b) });
};

const divideController = (req, res) => {
  const { a, b } = req.body;
  if (a === 0) {
    return res.status(200).send({ result: 0 });
  }
  if (b === 0) {
    return res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if (!a || !b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: divide(req.body.a, req.body.b) });
};

const remainderController = (req, res) => {
  const { a, b } = req.body;

  if (a === 0) {
    return res.status(200).send({ result: 0 });
  }

  if (b === 0) {
    return res.status(400).send({ error: 'Unable to divide by 0.' });
  }

  if (!a || !b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }

  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }

  res.status(200).send({ result: remainder(a, b) });
};

module.exports = {
  addController,
  minusController,
  timesController,
  divideController,
  remainderController,
};
