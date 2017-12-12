//////////////////////////////////////////
// HOISTING - FUNCTIONS

/*
Below section of code has function declaration first and then the function call. This is NOT AN HOISTING.
*/

function calculateAge(yearBirth) {
    console.log(2017-yearBirth);
}

calculateAge(1990);

/*
Below section of the code has function call first and then the declaration. This is called HOISTING.

As per the hoisting concepts, in creation phase of Execution context which in this case is the Global Execution Context, function declaration of the function calculateRetirement is store in the Variable Object even before the code was executed.

When we entered the execution phase, function calculateRetirement is already available for us to use it.
*/

calculateRetirement(27);

function calculateRetirement(Age) {
    console.log(65 - Age);
}


//REMEMBER: Hoisting is only applicable for function declarations and not for function expressions. When you execute below section of code we will get Uncaught TypeError: retirement is not a function.

//Uncomment to see see this scenario
/*
retirement(61);

var retirement = function(age) {
    console.log(65-age);
}
*/


///////////////////////////////////////////
// HOISTING - VARIABLES

/*
In the below section, we are attempting to print the value of the variable 'age' before it is initialized.

We don't get any execution error, instead we get the value as 'undefined' in the console because, the as a part of global execution context all the variable declarations are done with the value undefined.
*/
console.log(age); // This will give us undefined, because of hoisting.
var age = 23;
console.log(age);

//Below line of code will throw error since number is not defined. Uncomment 'console.log(Num)' to see the effect.

/*console.log(Num); */

/*
Age variable within the foo() function will be defined in the variable object of the execution context of the function foo()

Where as Age outside the foo() will be defined in the variable object of the global execution context.
*/

function foo() {
    console.log(age);  //undefined, because of Hoisting.
    var age = 65;
    console.log(age);  //65
}

foo();
console.log(age);  //23

//PS: TAKE AWAY FROM HOISTING IS WE CAN CALL THE FUNCTION BEFORE DECLARATION.