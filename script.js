var num1 = parseInt(prompt("Enter your first number:"));
var num2 = parseInt(prompt("Enter your second number:"));

var answer = document.body.querySelector(".result");
answer.innerHTML = "Answer: " + (num1 + num2);