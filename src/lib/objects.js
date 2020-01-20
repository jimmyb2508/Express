const createPerson = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)) { 
  return true;
  } else return false;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => people.map(person => person.age);

const findByName = (name, people) => {
  return people.filter(a => a.name === name)[0];
};

const findHondas = cars => {
  return cars.filter(a => a.manufacturer === 'Honda')
};

//find age of each object and make array
const averageAge = people => {
  let ages = people.map(a => {return a.age});
  return ages.reduce((totalAge, currentValue) => totalAge + currentValue, 0) / people.length;
};


const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
