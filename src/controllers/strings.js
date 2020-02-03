const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

const hello = (req, res) => {
  res.status(200).send({ result: sayHello(req.params.string) });
};

const upper = (req, res) => {
  res.status(200).json({ result: uppercase(req.params.hello) });
};

const lower = (req, res) => {
  res.status(200).json({ result: lowercase(req.params.HELLO) });
};

const character = (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
};

module.exports = { hello, upper, lower, character };
