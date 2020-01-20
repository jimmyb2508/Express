const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  return a!==b;
};

const truthiness = a => {
  return !!a;
};

const isEqual = (a, b) => {
  return a==b;
};

const isGreaterThan = (a, b) => {
    return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  if (a % 2 === 1)
  {return true;}
  else {return false;}
};

const isEven = a => {
  if (a % 2 === 0)
  {return true;}
  else {return false;}
};

const isSquare = a => {
  if (Number.isInteger(Math.sqrt(a)))
  {return true;}
  else {return false;}
};

const startsWith = (char, string) => {
  if (string.startsWith(char))
  {return true;}
  else {return false;}
};

const containsVowels = string => {
    return Boolean(string.match(/[aeiou]/gi));
  
  /*const vowels = ["a", "e", "i", "o", "u"];
    let foundVowels = 0
    vowels.forEach(vowel => {
      if (string.toLowerCase.includes(vowel)) {
    foundVowels += 1;
    }
    });
    return !!foundVowels*/
};

const isLowerCase = string => {
  return Boolean(!string.match(/[A-Z]/g));
  
  /* if (string == string.lowerCase())
  {return true;}
  else {return false;} */
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
