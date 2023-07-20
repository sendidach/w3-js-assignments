/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.
*/

console.log("%cQuestion 1:", "color: blue; font-size: 20px;");

const fizzBuzz = (num) => {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log("FizzBuzz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log("Pop");
  }
};

// Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz

/* Q2. Create a function called averager that gets the average of an array. */

console.log("%cQuestion 2:", "color: blue; font-size: 20px;");
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
let sum = 0;
let length = 0;
let average = 0;

const averager = (prices) => {
  let length = prices.length;
  for (let price of prices) {
    sum += price;
  }
  average = sum.toFixed(2) / length;
  return average;
};

let result = averager(prices);
console.log(result);

/* Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. */

console.log("%cQuestion 3:", "color: blue; font-size: 20px;");

let fah = 0;
const celToFah = (celsius) => {
  fah = celsius * 1.8 + 32;
  return fah.toFixed(2);
};

console.log(celToFah(37.5));
console.log(celToFah(-40));
console.log(celToFah(0));
console.log(celToFah(100));

let kel = 0;
const celToKel = (celsius) => {
  kel = celsius + 273.15;
  return kel.toFixed(2);
};

console.log(celToKel(173.13));
console.log(celToKel(-13));

/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/

console.log("%cQuestion 4:", "color: blue; font-size: 20px;");

let powered = 0;
const pow = (num, tothepow) => {
  powered = Math.pow(num, tothepow);
  return powered;
};

console.log(pow(2,2));
