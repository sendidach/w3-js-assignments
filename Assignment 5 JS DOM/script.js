//I advise you render the results on your browser Andy.... But Anyways:
// I did a lot of research while completing this assignmnet. What I've mostly learnt is:
// The input value inside input elements is always a string. Always need to be converted to a number uing parseFloat or parseInt.
// The difficulty of accessing some variables outside their scope (outside loops or functions.) Either needs to be declared first outside the scope and then accessed.
// Learning Learning Learning in progress...

let firstInput = document.querySelector('#input1');
let secondInput = document.querySelector('#input2');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let resultHere = document.querySelector('#result');
let value1, value2, result;

firstInput.onchange = function(){
    value1 = parseFloat(this.value);
    console.log(value1);
    console.log(typeof value1);
};

secondInput.onchange = function(){
    value2 = parseFloat(this.value);
    console.log(value2);
    console.log(typeof value2);
};

plus.addEventListener("click", function() {
    let result = value1 + value2;
    console.log(result) 
    console.log(typeof result) 
    resultHere.innerHTML = `<p> ${result} </p>`;
});

minus.addEventListener("click", function() {
    let result = value1 - value2;
    console.log(result) 
    console.log(typeof result) 
    resultHere.innerHTML = `<p> ${result} </p>`;
});

multiply.addEventListener("click", function() {
    let result = value1 * value2;
    console.log(result) 
    console.log(typeof result) 
    resultHere.innerHTML = `<p> ${result} </p>`;
});

divide.addEventListener("click", function() {
    let result = value1 / value2;
    console.log(result) 
    console.log(typeof result) 
    resultHere.innerHTML = `<p> ${result} </p>`;
});


