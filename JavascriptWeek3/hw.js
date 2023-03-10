/* EXERCISE 1
 Write a piece of code to find the largest of  given two integers
*/

a = 7
b = 9

if a > b 
print (a+b)

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is NOT equal to 5 then display " not equal"
*/

console.log(5 == 5);
// expected output: false 


/* EXERCISE 2
  Write a piece of code to check: if  given an integer is  divisible  by  5 then display "divisible by 5" (search for modulo operator)
*/



/* EXERCISE 3
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

function checkValue(num1, num2) {
  if (num1 === 8 || num2 === 8) {
    return true;
  }
  if (num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
    return true;
  }
  return false;
}

console.log(checkValue(5, 3)); // true
console.log(checkValue(2, 6)); // false


/* EXERCISE 4
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

function calculateTotalCost(totalShoppingCart) {
  let shippingCost = 0;
  if (totalShoppingCart < 50) {
    shippingCost = 10;
  }
  const totalCost = totalShoppingCart + shippingCost;
  return totalCost;
}


/* EXERCISE 5
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

function calculateTotalCost(totalShoppingCart) {
  let discountedTotal = totalShoppingCart * 0.8;
  let shippingCost = 0;
  if (discountedTotal < 50) {
    shippingCost = 10;
  }
  const totalCost = discountedTotal + shippingCost;
  return totalCost;
}
const totalShoppingCart = 100;
const totalCost = calculateTotalCost(totalShoppingCart);
console.log(totalCost); // Output: 72 (20% discount applied, and shipping is free for this amount)


/* EXERCISE 6
Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
Write a piece of code for checking if a given value is a integer or not. (search for 'typeof')
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Write a piece of code for checking if a given number is even or odd. (search for modulo operator)
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
Change the order of logic in the code so that it will return the correct statements in all cases.
let val = 7
if (val < 10) {
    console.log("Less than 10");
  } else if (val < 5) {
     console.log("Less than 5");
  } else {
    console.log("Greater than or equal to 10");
  }
*/

/* WRITE YOUR ANSWER HERE */

/*
EXERCISE 10
Write chained if/else if statements to fulfill the following conditions:
num < 5 - display Tiny
num < 10 - display Small
num < 15 - display Medium
num < 20 - display Large
num >= 20 - display Huge
*/

/* WRITE YOUR ANSWER HERE */

/*  EXERCISE 11
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
Display the numbers 0 through 5 (inclusive) in acesnding order using a while loop.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
Display the numbers 0 through 10 (inclusive) in acesnding order using a for loop.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 14
Display the numbers 0 through 10 (inclusive) in acesnding order  but skip displaying 3 and 8.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 15
 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 16
  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz
 */

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 17
  Write a piece of code to check the day of the week .  Usie  SWITCH - CASE  and given "day" variable with range from 1 to 7. 
  For example: if day value is equal to 1 display "Monday", if day value is equal to 3 display "Wednesday"

  */

/* WRITE YOUR ANSWER HERE */
