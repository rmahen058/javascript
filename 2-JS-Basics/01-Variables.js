var firstName = 'Mike';
var lastName = 'Rexx';
var age = 32;
var job = 'Techie';
var isTechGenius = true;
var sex, country;
console.log(sex);  /*Will print undefined since the value is undefined to the declared variable.*/

/*
Type Coercion:
Javascript dynamically converts the datatype from one type to other on need basis.
*/

console.log(firstName + age); //Here age is converted to String

console.log(firstName + ' ' + lastName + ' is ' + age + ' years old.' + ' is he Tech Genius? ' + isTechGenius);

/*
Variable Mutation:
Changing a value of thr variable.
We don't have to declare the variables again as shown below.
*/

age = 'Thirty Two';
job = 'Amazing Techie';

console.log(firstName + ' ' + lastName + ' is ' + age + ' years old.' + 'He works as ' + job +'. Is he Tech Genius? ' + isTechGenius)


