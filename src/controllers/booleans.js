const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

const negation = (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
};

const truth = (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
};

const odd = (req, res) => {
  const realNumber = Number(req.params.number);
  if (!realNumber) {
    return res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: isOdd(Number(req.params.number)) });
};

const letterStart = (req, res) => {
  const character = req.params.letter;
  if (character.length > 2) {
    return res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).json({ result: startsWith(req.params.letter, req.params.string) });
};

module.exports = {
  negation,
  truth,
  odd,
  letterStart,
};
