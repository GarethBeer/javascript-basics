const createPerson = (name, age) => {
  // your code here
};

const getName = object => {
  // your code here
};

const getProperty = (property, object) => {
  // your code here
};

const hasProperty = (property, object) => {
  // your code here
};

const isOver65 = person => {
  // your code here
};

const getAges = people => {
  // your code here
};

const findByName = (name, people) => {
  // your code here
};

const findHondas = cars => {
  // your code here
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  let talkingPerson = {
  name: name,
  age: age,
  introduce: fred => {
    return `Hi ${fred}, my name is ${name} and I am ${age}!`
  }
}
  return talkingPerson;
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
