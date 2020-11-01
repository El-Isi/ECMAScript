function newFunction(name, age, country) {
  var name = name || 'isidro';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name, age, country);
}

// es6
function newFunction2(name = 'isidro', age = 21, country = "MX") {
  console.log(name, age, country);
};

newFunction2();
newFunction2('Sergio', '20', 'EU');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
  + "otra frase epica que necesitamos."

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
  'name': 'isidro',
  'age': 21,
  'country': 'MX'
}

console.log(person.name, person.age);

let { name } = person;
console.log(name);

let team1 = ['Isidro', 'Lewis', 'Gaby'];
let team2 = ['Juan', 'Marco', 'Sergio'];

let education = ['Noe', ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global Var";
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
//a = 'a'; no es posible porque es una constante
console.log(a);

let name = 'isidro';
let age = 21;

//es5
obj = { name: name, age: age };
//es6
let obj2 = { name, age };
console.log(obj2);

const names = [
  { name: 'isidro', age: 21 },
  { name: 'Gaby', age: 24 }
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const square = num => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from './module';

hello();

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
