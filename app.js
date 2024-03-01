//chapter 4

//Question 1

// var num1,num2,num3;

// Question 3

// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable.</p>");
// document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name.</p>");
// document.write("<p>Variable names are case-sensitive.</p>");
// document.write("<p>Variable names should not be JS reserved keywords.</p>");


// chapter 5
//   Question 1

// var num1=3;
// var num2=5;
// var result= num1+num2;

// document.write("sum of 3 and 5 is  "    + result);


// Question 2
// var num1=3;
// var num2=5;
// var result= num1-num2;

// document.write("sub of 3 and 5 is  "    + result);
// var num1=3;
// var num2=5;
// var result= num1*num2;

// document.write("Multiplication of 3 and 5 is  "    + result);

// var num1=3;
// var num2=5;
// var result= num1/num2;

// document.write("sub of 3 and 5 is  "    + result);

// var num1=3;
// var num2=5;
// var result= num2 % num1;

// document.write("Modulus of 3 and 5 is  "    + result);


// Question 3

// var num;

// // b. Show the value of the variable after declaration
// document.write("Value after variable declaration is: " + num + "<br>");

// // c. Initialize the variable with some number
// num = 5;

// // d. Show the initial value of the variable
// document.write("Initial value: " + num + "<br>");

// // e. Increment the variable
// num++;

// // f. Show the value of the variable after increment
// document.write("Value after increment is: " + num + "<br>");

// // g. Add 7 to the variable
// num += 7;

// // h. Show the value of the variable after addition
// document.write("Value after addition is: " + num + "<br>");

// // i. Decrement the variable
// num--;

// // j. Show the value of the variable after decrement
// document.write("Value after decrement is: " + num + "<br>");

// // k. Show the remainder after dividing the variable's value by 3
// var remainder = num % 3;

// // l. Output: "The remainder is: 0"
// document.write("The remainder is: " + remainder);



//Questiuon 4

// var Price = 600;

//   // Calculate the cost of buying 5 tickets
//   var totalCost = Price * 5;

//   // Display the total cost in the browser
//   document.write("The total cost of buying 5 movie tickets is: " + totalCost + " PKR");

//Question 7
// var priceItem1 = 650;
//   var priceItem2 = 100;


//   var quantityItem1 = 3;
//   var quantityItem2 = 7;


//   var shippingCharges = 100;

//   var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

 
//   document.write("<h2>Receipt</h2>");
//   document.write("<p>Price of Item 1: " + priceItem1 + " PKR</p>");
//   document.write("<p>Price of Item 2: " + priceItem2 + " PKR</p>");
//   document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
//   document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
//   document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
//   document.write("<h3>Total Cost: " + totalCost + " PKR</h3>");



//Question 8
// var obtainmarks=804;
// var totalmarks=980;
// var percentage=obtainmarks/totalmarks*100;

// document.write("<h1> Mark Sheet</h1><br>");
// document.write("Total marks; 980<br>");
// document.write("Marks obtained; 804<br>");
// document.write("percentage;  "+ percentage);



// chapter 6
// Question 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// --a;

//  the value of  a becomes 1 after this operation.

//  --a - --b;

// Here, --a decrements the value of  a becomes 0.
// --b decrements the value of  b becomes 0..


// --a - --b + ++b;

// --a decrements the value of  So, a becomes -1.
// --b decrements the value of b  b becomes -1.
// ++b increments the value of b , b becomes 0.
// Therefore, the expression becomes -1 - (-1) + 0, which equals -2.

// --a - --b + ++b + b--;

// --a decrements the value of a becomes -2.
// --b decrements the value of b becomes -2.
// ++b increments the value of  b becomes -1.
// b-- uses the value of b i becomes -2 after this operation.
// Therefore, the expression becomes -2 - (-2) + (-1) + 0, is equals -3.


// The value of a is -2.
// The value of b is -2.
// The value of result is -3.