// ------ JAVASCRIPT OPERATORS ------

/*
    ------ COMPARISION OPERATORS ------
    |-----------------------------------------------------|
    | Operator  | Description                             |
    |-----------------------------------------------------|
    | ==        | Equal to                                |
    | ===       | Equal value and equal type              |
    | !=        | Not equal                               |
    | !==       | Not equal value or not equal type       |
    | >         | Greater than                            |
    | <         | Less than                               |
    | >=        | Greater than or equal to                |
    | <=        | Less than or equal to                   | 
    | ?         | Ternary operator                        |
    |-----------------------------------------------------| 
*/

var result = (5 == 5);
console.log('Result must be True: ' + result);
result = (5 == 10);
console.log('Result must be False: ' + result);
var x = '5';
result = (x === '5');
console.log('Result must be True: ' + result);
result = (5 === "5");
console.log('Result must be False: ' + result);


/*
    ------ LOGICAL OPERATORS ------
    |-----------------------------------------------------|
    | Operator  | Description                             |
    |-----------------------------------------------------|
    | &&        | logical 'and'                           |
    | ||        | logical 'or'                            |
    | !         | logical 'not'                           |
    |-----------------------------------------------------| 
*/
var i = 5;
var j = 5;
console.log(i && j);


/*
    ------ LOGICAL BITWISE OPERATORS ------
    |---------------------------------------|----------|-----------------|-----------|----------|
    | Operator  | Description               | Example  | Same as         | Result    | Decimal  |
    |-------------------------------------------------------------------------------------------|
    | &         | AND                       | 5 & 1    | 0101 & 0001     | 0001      | 1        |
    | |         | OR                        | 5 | 1    | 0101 | 0001     | 0101      | 5        |
    | ~         | NOT                       | ~5       | ~0101           | 1010      | 10       |
    | ^         | XOR                       | 5 ^ 1    | 0101 ^0001      | 0100      | 4        |
    | <<        | Zero fill left shift      | 5 << 1   | 0101 << 1       | 1010      | 10       |
    | >>        | Signed right shift        | 5 >> 1   | 0101 >> 1       | 0010      | 2        |
    | >>>       | Zero fill right shift     | 5 >>> 1  | 0101 >>> 1      | 0010      | 2        |
    |---------------------------------------|----------|-----------------|----------------------|
*/

