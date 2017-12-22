//////////////////////////////////////////
// 'THIS' VARIABLE

/*
This Variable:
This variable is a variable where each and every execution context gets it.

Regular Function Call: The 'this' keyword points at the global object (eg. Window object in the browser)

Method Call: The 'this' variable points to the obhect that is calling the method

Note: The 'this' keyword is not assigned a value until a functin where it is defined is actually called.
*/

console.log(this); //Points at Window Object
calculateAge(1985);

function calculateAge(yearBirth) {
    console.log(2017 - yearBirth);
    console.log(this); //Points at window object since it is regular object
}

var Emp = {
    Name: 'Rakesh',
    Age: 32,
    Retirement: function() {
        console.log(this); //THis refers to Emp object
        console.log(65 - this.Age); 
        
        function innerFunction() {
            console.log(this); //This refers to window object. Because of regular function call.
        }
        
        innerFunction(); 
    }
}

Emp.Retirement();