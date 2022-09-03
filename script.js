// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.
// ----------------Solution Q-1------------
console.clear();
var str1 = 'Today is';
var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.     ';
Result=str1+' '+str2.trim()+' '+str3.trim();
console.log(Result);

// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.
// ----------------Solution Q-2------------
let enteredAlphabet='d';
enteredAlphabet=enteredAlphabet.toLowerCase();
if(enteredAlphabet.charCodeAt()>=97 && enteredAlphabet.charCodeAt()<=122){
  if((enteredAlphabet=='a')||(enteredAlphabet=='e')||(enteredAlphabet=='i')||(enteredAlphabet=='o')||(enteredAlphabet=='u')){
    console.log("Vowel");
  }
  else{
     console.log("Consonant");
  }
}
else{
   console.log("non-alphabet");
}

// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.
// ----------------Solution Q-3------------
const num1 = parseInt(prompt("Enter first Number: "));
const num2 = parseInt(prompt("Enter second Number: "));
const operator = prompt("Enter Operator: either + , - , * or / ");
switch(operator){
  case "+":
    var result=num1+num2;
    console.log("Addition of 2 numbers is:"+  result);
    break;
  case "-":
    var result=num1-num2;
    console.log("Subraction of 2 numbers is:"+  result);
    break;
  case "*":
    var result=num1*num2;
    console.log("Multiplication of 2 numbers is:"+  result);
    break; 
  case "/":
    var result=num1/num2;
    console.log("Division of 2 numbers is:"+  result);
    break;
  default:
    console.log("Invalid input:"+  operator);
}

// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.
// ----------------Solution Q-4------------
const a=prompt("enter the first side : ");
const b=prompt("enter the second side : ");
const c=prompt("enter the third side : ");
if(a == b && b== c){
  console.log("The triangle is Equilateral");
}
else if(a == b || a == c || b == c){
   console.log("The triangle is Isosceles");
}
else if(a != b != c){
  console.log("The triangle is Scalene Triangle");
}

//Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354
// ----------------Solution Q-5------------
let units=300;
let bill;
if(units <= 50){
  bill=units * 0.5;
}
else if(units <= 150){
  bill=50 * 0.5 + (units-50) * 0.75;
}
else if(units <= 250){
  bill=50 * 0.5 + 100 * 0.75 + (units-150) * 1.2;
}
else if(units > 250){
   bill=50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units-250) * 1.5;
  bill=bill + bill * 0.2;
}

console.log("Bill is INR:" + bill);

