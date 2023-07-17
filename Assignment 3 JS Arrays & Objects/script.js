// Q1: 
// 1. Create an array called grades and put the following values: 56, 87, 99, 40
let grades = [56, 87, 99, 40];

// 2. Add another element at the end of the array with value: 68
grades.push(68);

// 3. Remove the 1st element of the array
grades.shift();

// 4. Change 40 to 60.
let findForty = grades.indexOf(40);
grades[findForty]=60;

// 5. Create a variable called average and compute for the average of the grades array.
//     Tip: you can create another variable as a placeholder for the sum first.
// */
let sum = 0;
for (let grade of grades){
     sum += grade;
}
console.log(sum);


// Q2:
// 1. Create an object called vehicle with following properties:
//     a. name (String)
//     b. brand (String)
//     c. year of make (Number)
//     b. number of wheels (Number)
//     e. isEnvironmentFriendly (Boolean)
// Feel free to put any value.

let vehicle = {
    name : "Car",
    brand : "BMW",
    yearOfMake: 2018,
    numberOfWheels: 4,
    isEnvironmentFriendly: false,
}
// 2. Use the for-in loop to display both the properties and values of the object.
for (let key in vehicle){
    console.log(`The ${key} is: ${vehicle[key]}`);
};