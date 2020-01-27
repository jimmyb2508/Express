const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:hello', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.hello) });
});

app.get('/strings/lower/:HELLO', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.HELLO) });
});

app.get('/strings/first-characters/:string?', (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
});

// app.get('/numbers/add/:a/and/:b', (req, res) => {
//   const a = parseInt(req.params.a);
//   const b = parseInt(req.params.b);

//   res.status(200).json({ result: add(a, b) });
// });

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.sendStatus(400)
    : res.status(200).json({ result: add(a, b) });
});

// app.get('/numbers/subtract/:b/from/:a', (req, res) => {
//   const a = parseInt(req.params.a);
//   const b = parseInt(req.params.b);

//   res.status(200).json({ result: subtract(a, b) });
// });

app.get('/numbers/subtract/:b/from/:a', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.sendStatus(400)
    : res.status(200).json({ result: subtract(a, b) });
});

app.post('/numbers/multiply', (req, res) => {
  res.status(200).json({ result: multiply(req.body.a, req.body.b) });
});

app.post('/numbers/divide', (req, res) => {
  res.status(200).json({ result: divide(req.body.a, req.body.b) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.status(200).json({ result: add(a, b) });
});

module.exports = app;
