//Write JS code that solve the following problems
//Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.

// ---------MY ANSWER QUESTION 1 -----------

let q1test = 15;
let isDivisibleByThree = q1test % 3 === 0;
let isDivisibleByFive = q1test % 5 === 0;

if (isDivisibleByFive && isDivisibleByThree) {
  console.log(`Yes! ${q1test} is divisible  by both 3 and 5`);
} else if (isDivisibleByFive && !isDivisibleByThree) {
  console.log(`${q1test} is only divisible by 5`);
} else if (!isDivisibleByFive && isDivisibleByThree) {
  console.log(`${q1test} is only divisible by 3`);
} else {
  console.log(`${q1test} is divisible by none`);
}

// ---------End Of ANSWER QUESTION 1 -----------

//Q2. Using an if-else statement, determin is a year is a leap year or not.
//Research what are the conditions to be considered a leap year.

let year = 1999;
// let year = 2000;
// let year = 1900;
// let year = 2024;

// ---------MY ANSWER QUESTION 2 -----------

// Based on my research, this is what I found:
    // Years divisible by 4 are potential leap years.
    // Years divisible by 100 are not leap years unless they are also divisible by 400.
    //Codewise:

if((year%4)===0 && (!year%100)===0 || (year%400)===0){
    console.log(`${year} is a Leap Year !!`)
} else {
    console.log(`${year} is not a Leap Year !!`)
}

// ---------End Of ANSWER QUESTION 2 -----------


//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.

// ---------MY ANSWER QUESTION 3 -----------

for (let i = 0; i <= 100; i++) {
  let isDivisibleByThreeForLoop = i % 3 === 0;
  let isDivisibleByFourForLoop = i % 4 === 0;
  if (isDivisibleByThreeForLoop && isDivisibleByFourForLoop) {
    console.log(i);
  }
}

// ---------End Of ANSWER QUESTION 3 -----------
