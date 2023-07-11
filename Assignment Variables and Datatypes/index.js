let studentFirstName = "Brandon";
let studentLastName = "N";
let grade1 = 53;
let grade2 = 96;
let grade3 = 65;
let grade4 = 74;
let passingGrade = 80;
//1.Create a variable called average that computes for the average from grade1 to grade4
let average;
average= (grade1 + grade2 + grade3 + grade4)/4;
console.log("The average grade is " + average);

//2. Change the value of studentLastName to "Newman" 
studentLastName= "Newman";
console.log("New last name is: " + studentLastName);

//3. Print in console the following statement: "<value of studentFirstName> <value of studentLastName> has an average grade of <value of average>"
//ex. Jane Doe has an average grade of 100.
console.log(studentFirstName + " " + studentLastName + " has an average grade of " + average);

//4. Write code that would answer this question: Did the student pass?
let success = average<=passingGrade;
if(success){
    console.log(studentFirstName + " " + studentLastName + " has successfully passed the course");
} else {
    console.log(studentFirstName + " " + studentLastName + " has failed the course");
};