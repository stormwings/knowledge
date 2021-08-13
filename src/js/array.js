// do while
let contador = 0;
var checkRandom = () => Math.random() > 0.25;

do {
  contador++;
} while (!checkRandom()); // until the return is false

console.log(`Fui a ver si llovía ${contador}`);

// Filter
var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72
};

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
};

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
};

// helper functions
const esAlta = ({ altura }) => altura > 1.8;
const esBaja = ({ altura }) => !esAlta({altura});

// declare array and filter with helpers
var personas = [sacha, martin, alan];

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

console.log(personasAltas);
console.log(personasBajas);

// Map
var personas = [sacha, alan, martin];

// helper function to change 'altura' value (featuring transform)
const pasarAlturaCms = persona => ({
  ...persona,
  altura: persona.altura * 100
});

var personasCms = personas.map(pasarAlturaCms);
console.log(personasCms);


// REDUCE ARRAY TO SINGLE VALUE

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;

var totalDeLibros = persona.reduce(reducer, 0);

console.log(`El total de libros leidos es: ${totalDeLibros}`);

// SUM OF ARRAY ITEMS

const lineA = 5
const lineB = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

const fun = item => typeof item === 'object'
  ? item.reduce((sum, item) => sum += item)
  : undefined

console.log(fun(lineA))
console.log(fun(lineB))

// MATRIX EDGES

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

const highItem = matrix => {
  let value = 0
  matrix.forEach((row, i) => {
    row.forEach((element, j) => {
      if (i === j) {
        value += element
      }
    })
  });

  return value
}

const lowItem = matrix => {
  const size = matrix.length - 1
  let value = 0

  let i = 0
  while (i <= size) {
    value += matrix[size - i][i]
    i++
  }

  return value
}

const getModule = number => number < 0 ? number * (-1) : number

const sumX = highItem(arr)
const sumY = lowItem(arr)

console.log(getModule(sumX - sumY))

// factions of positive, negative and zeros

const arr = [1, 1, 0, -1, -1]
const length = arr.length
let result = []

let sumPositives = 0
let sumNegatives = 0
let sumZeros = 0

arr.forEach(element => {
  switch (true) {
    case (element > 0):
      sumPositives++
      break;
    case (element < 0):
      sumNegatives++
      break;
    default:
      sumZeros++
      break;
  }
});

const positives = sumPositives / length
const negatives = sumNegatives / length
const zeros = sumZeros / length

result.push(positives.toFixed(6))
result.push(negatives.toFixed(6))
result.push(zeros.toFixed(6))

console.log(result)

// Initialize an array of size n and fill with default values
const arr = Array(5).fill(0);
console.log(arr); // [0, 0, 0, 0, 0]

// Pick random element from an array
const themes = ['neo', 'black & white', 'color'];
const randomNumber =  Math.round(Math.random() * 100); // random number between 0 - 100
const randomElement = randomNumber % themes.length; // so that the number is within the arrays range 
console.log(themes[randomElement]);

// Remove duplicates from array
const array = [1, 1, 2, 3, 5, 5, 1];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 5]

// Loop over an object
const age = {
  john: 20,
  max: 43
};

// Solution 1 - Get 'keys' and loop over
const keys = Object.keys(age);
keys.forEach(key => age[key]++);
console.log(age); // { john: 21, max: 44 }

// Solution 2 - for..in loop
for(let key in age){
    age[key]++;
}

console.log(age); // { john: 22, max: 45 }

// String to a number fast
// Now you can easily convert a string to a number by just only using + sign. Unlike the old method,
// using + operator is much cleaner and easier.
my_string = "123";
console.log(+my_string);
// 123
my_string = "amazing";
console.log(+my_string);
// NaN

// A number to a string fast
// You can convert a number to a string in a simpler way without using 
// JavaScript built in toString() method.
// Have a look at this:
let converted_number = 5 + "";
console.log(converted_number);
// 5

console.log(typeof converted_number); 
// string

// find()
const list = [12, 50, 65, 52, 44];
const found = list.find(elem => elem > 50);
console.log(found);

// findIndex()
const list = [12, 28, 8, 125, 58];
const index = list.findIndex(elem => elem > 50);
console.log(index);

// boundedRatio
const boundedRatio2 = (array, left, right) => {
  if (left > right || array.length === 0) return [...Array(array.length)].fill(false)

  return Array(array.length).fill(false).map((v, index) => {
      const arrayRange = [...Array(right - left + 1).keys()].map(i => i + left);
      
      const numberX = arrayRange.find(element => ((index + 1) * element) === array[index]);

      return array[index] == (((index) + 1) * numberX)
  })
}

// console.log("1: " + boundedRatio2([8,5,6,16,5], 1,3))
// console.log("2: " + boundedRatio2([100],1,1000))
// console.log("3: " + boundedRatio2([1,2,3,4,5],1,1))
// console.log("4: " + boundedRatio2([1,2,3,4,5],2,10000))
// console.log("5: " + boundedRatio2([1000000, 20000], 10000, 10000))
// console.log("6: " + boundedRatio2([65, 46, 60, 164, 243, 228, 231, 298, 231, 211], 20, 50))
// console.log("7: " + boundedRatio2([643,531,504,224,415,360,364,84,212,587], 70, 80))
// console.log("8: " + boundedRatio2([643,531,504], 80, 50))
// console.log("9: " + boundedRatio2([], 1, 12))
// console.log("10: " + boundedRatio2([...Array(49)].map((i, index) => index + 1), 1, 10000))


// ARRAY FILL WITH INDEX

// Array.from({length: n}, (item, index) => index)
// [...Array(n)].map((item, index) => index);
// [...Array(n).keys()]

function countTinyPairs(a, b ,k) {
    const withConcat = [...b.reverse()];

    return a.reduce((sum, item, index,) => {
        const value = parseInt(`${item}${withConcat[index]}`);

        return sum + (value < k ? 1 : 0);
    }, 0)
}

// console.log(countTinyPairs([1, 2, 3], [1, 2, 3], 31))
// console.log(countTinyPairs([16, 1, 4, 2, 14], [7, 11, 2, 0, 15], 743))
// console.log(countTinyPairs([1, 2, 3], [1, 2, 3], 31))
// console.log(countTinyPairs([1, 2, 3], [3, 2, 1], 30))
// console.log(countTinyPairs([1, 2, 3], [3, 2, 1], 12))
// console.log(countTinyPairs([], [], 0))
// console.log(countTinyPairs([0], [0], 0))
// console.log(
//     countTinyPairs(
//         [37, 22, 19, 37, 40, 9, 35, 9, 7, 37],
//         [30, 40, 40, 29, 13, 23, 0, 0, 16, 8],
//         1822
//     )
// )

// isPrime
function isPrime(element) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

// console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
// console.log([4, 5, 8, 12].find(isPrime)); // 5

// constructorNames

function constructorNames(className, methodName) {
  if (className.length !== methodName.length)
      return false

  let result = true;
  const origin = className.split('');
  const target = methodName.split('');

  origin.map((item) => !target.includes(item) ? result = false : null)

  return result;
}

// console.log("1: " + constructorNames('abbzccc', 'babzzcz'))
// console.log("2: " + constructorNames('abcdbd', 'bbbcca'))
// console.log("3: " + constructorNames('a', 'b'))
// console.log("4: " + constructorNames('aaa', 'aaaa'))
// console.log("5: " + constructorNames('bbcd', 'cbdb'))
// console.log("6: " + constructorNames('bbaaa', 'aaabbb'))
// console.log("7: " + constructorNames('aabbbccdddd', 'ccbcbcaaddd'))
// console.log("8: " + constructorNames('kkllomlnnppkk', 'mpnonokkkkppl'))


function makeArrayConsecutive2(statues) {
  let cuantity = 0;

  statues.sort(function(a, b) {
      return a - b;
  })

  const minNumber = statues[0] === 0 ? 1 : statues[0] 
  const maxNumber = statues[statues.length - 1]
  
  for (let index = minNumber; index <= maxNumber; index++) {
      if (!statues.find(item => item === index)) {
          cuantity++
      }
  }    

  return cuantity
}

// console.log(makeArrayConsecutive2([4, 2, 7, 18]))

function sumsDivisibleByK(a, k) {
  let pairs = 0;

  a.map((aItem, indexA) =>
      a.slice(-((a.length-indexA)-1))
      .forEach((bItem, indexB) => 
          (indexA !== indexB && indexA !== a.length && ((aItem + bItem) % k) === 0)
              ? pairs++
              : null
      )
  )

  return pairs;
}

console.log(sumsDivisibleByK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))

const orderArrayDesc = (array) => array.sort((a, b) => a - b);
