// ------ JAVASCRIPT OPERATORS ------

/*
    ------ STRING OPERATORS ------
    |-----------------------------------------------------|
    | Operator  | Description                             |
    |-----------------------------------------------------|
    | +         | Used to concatenate string              |
    | +=        | Assignment operator can also be used to |
    |           | add (concatenate) strings.              |
    |-----------------------------------------------------|
    
*/
    var txt1 = "Hello ";
    var txt2 = "World ";
    console.log('txt1 + txt2: ' + txt1 + txt2);

    txt1 += "Rakesh, I am Learning JavaScript.";
    console.log(txt1);

/*
ADDING STRING AND NUMBER
------------------------
Adding two numbers, will return the sum.
But adding a number and a string will return a string.
*/

var x = 10 + 5;
var y = "10" + 5;
var z = "Hello" + 5;

console.log(x);
console.log(y);
console.log(z);

