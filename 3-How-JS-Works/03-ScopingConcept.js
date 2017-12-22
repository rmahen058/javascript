////////////////////////////////////////////
///// SCOPING

/*
Scoping means- Where can we access the variable.
In JS, each new function creates a scope: the space/environment, in which the variables it defines are accessible.
In other languages, IF block, For Loop , While block creates a scope.
In JS, we need to write a new function to create a scope

*/

// LEXICAL SCOPING:
/*
Lexical scoping: a function that is lexically within another function gets access to the scope of the outer function. 
See the example below:
*/
/*
In the below example, second() function was called in the same scoping area that is withing the first() function. So it will have access to variables in first(). Since first function is called from the global scope, it will have acess to global variable.
*/


var a = "Hello!";
first();

function first() {
    var b = " Hi!";
    second();
    
    function second() {
        var c = "Hey!";
        console.log(a + b + c );
    }
}

/*
In the below example, second() function was called in the same scoping area that is withing the first() function. So it will have access to variables in first(). Since first function is called from the global scope, it will have acess to global variable.
*/


var a = "Hello!";
first();

function first() {
    var b = " Hi!";
    second();
    
    function second() {
        var c = "Hey!";
        console.log(a + b + c);
        third();
        //console.log(d) //This is not possible because scoping cannot access to chile variables.
    }
}

function third() {
    var d = "What!";
    //console.log(c); //This is not possible because it is not in the same level.
}