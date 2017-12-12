///////////////////////////////////////////
// CODING CHALLENGE- 2
///////////////////////////////////////////

/*
1. Create an array with some years where persons were born
2. Create an empty array
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into console whether each person is of full age (18 or older), as well as their age
5. Finally, create a function called printFullAge which recieves the array of years as an arguements, executes the step 2., 3. and 4. and returns a array of true/ false boolean values: true if the person is of full age and false if not.
6. Call the function with two different array and store the results in two variables: full_1 and full_2

Example Input: [1965, 2008, 1992]
Example Output: [true, false, true]
*/

var yearBirth = [1965, 2008, 1992];

function printFullAge(yearBirth) { 
    var age = new Array(); //var age = [];
    for(var i=0; i<yearBirth.length; i++) {
    age[i] = 2017 - yearBirth[i]
    } 
    var output = [];
    var isMajor = true;
    for(i=0 ; i<age.length; i++) { 
        if(age[i] >= 18) { 
            console.log("Person is Major with Age: " + age[i]); 
            output[i] = isMajor;
        } else { 
            console.log("Person is Minor with Age: " + age[i]); 
            output[i] = !isMajor;
        } 
    }
    return output;
}

console.log(
printFullAge(yearBirth));

yearBirth = [2001, 2005, 1990, 1956]
var full_1 = printFullAge(yearBirth);
console.log(full_1);

yearBirth = [1945, 1991, 2017];
var full_2 = printFullAge(yearBirth);
console.log(full_2);