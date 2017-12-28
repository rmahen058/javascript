///////////////////////////
// PRIMITIVES Vs OBJECTS

/*
PRIMITIVES:
-----------
number, string, null, undefined and boolean

Variables containing primitives actuall hold the data inside of the variable itself
It has real copy of the data.

OBJECTS:
--------
Everything else other than above are objects

Variables associated with objects don't contain objects, it holds only reference to the place in the memory where the object is stored.

Variable declared as objects don't have copy of the objects, where as it points to it's memory

*/

//Examples:

var a = 50;
var b = a;
a = 100;
console.log(a); //100
console.log(b); //50

/*
In above example, a and b were initially assiged 50, because of primitivity, in real physical memory a and b were assigned with the value 50. Later on when we changed the value of a, it only changed the value of 'a' physical memory.
*/

var obj1 = {
    name : "Jane",
    age: 23
}

var obj2 = obj1;

obj1.age = 75;
console.log(obj1.age);
console.log(obj2.age);
console.log(obj1.name);
obj2.name = "ChangedName";
console.log(obj1.name);
console.log(obj2.name);

/*
In above example, when obj2 = obj1, it didn't create the object, but was only assiged the reference to an obj1, so any changes to obj1 would reflect in obj2. Also any change in obj2 will reflect in obj1'*/

//FUNCTION

var age = 13;
var obj = {
    name: "Rakesh",
    city: "Bentonville"
}

var changeFunct = function(a, b) {
    a = 500;
    b.city = "Atlanta";
}

changeFunct(age, obj);
console.log(age);
console.log(obj.city);
