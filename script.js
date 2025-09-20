// 1. Write a function that displays current date & time in your browser.
var currentDate = new Date;
document.writeln(currentDate + "<br> <br>");

//  2. Write a function that takes first & last name and then it greets the user using his full name.   
var firstName ="Myra"
var lastName = "Umer"
const fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");
document.writeln("Myra", "Umer" + "<br><br>");  

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function sumFromUser() {
  var a = prompt("Enter the first number:");
  var b = prompt("Enter the second number:");
  return Number(a) + Number(b);
}
var result = sumFromUser();
document.writeln("Sum of two numbers: " + result + "<br><br>");

// 4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and
// show the desired result in your browser.
  function calculator(num1, num2, operator) {
    var result;

    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else {
      result = "Invalid operator";
    }
    return result;
  }
  var a = parseFloat(prompt("Enter first number:"));
  var b = parseFloat(prompt("Enter second number:"));
  var op = prompt("Enter operator (+, -, *, /):");
  var answer = calculator(a, b, op);
  alert("Result: " + answer);

//   5. Write a function that squares its argument.
  function square(n) {
  return n * n;
}
document.writeln("The square of number 5: " + square(5));

// 6. Write a function that computes factorial of a number.
function factorial(n) {
  if (n < 0) {
    return undefined; 
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
document.writeln(factorial(5)); 
document.writeln(factorial(0)); 
}
