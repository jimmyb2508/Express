const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

const index = (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
};

const toString = (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
};

const append = (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
};

const vowel = (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
};

const element = (req, res) => {
  let index = '';
  if (!req.query.index) {
    index = 0;
  } else {
    index = req.query.index;
  }
  res.status(200).json({ result: removeNthElement2(index, req.body.array) });
};

module.exports = {
  index,
  toString,
  append,
  vowel,
  element,
};
