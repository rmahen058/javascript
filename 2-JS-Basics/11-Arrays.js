///////////////////////////////////////
//ARRAYS

/*
Arrays stores data (any datatype) in contigous memory location
*/

//Array Declaration

var Employee = ["John", "Smith", 17904, "Bentonville"];
var Company = new Array("Facebook", "Amazon", "Google");

//Print elements of Array
console.log("1-->" + Employee);
console.log("2-->" + Company);

//Print individual Elemets of Array
console.log("3-->" + Employee[0]);
console.log("4-->" + Company[2]);

//Print indexof an element
console.log("5-->" + Employee.indexOf("Bentonville"));
var userCompany = prompt("Enter the company name.");
if(Company.indexOf(userCompany) === -1) {
    console.log("6A-->" + userCompany + " is not part of Company Array")
} else {
    console.log("6B-->" + userCompany + "is part of Company Array.")
}

//Array Mutation
Employee[0] = "Mike";
console.log("7-->" + Employee);

///////////////////////////////////////
//ARRAY FUNCTIONS

//PUSH FUNCTION - Append an element to the Array list
Employee.push("USA");
console.log("8-->" + Employee)

//POP FUNCTION - Removes last element of an array and returns it
var poppedElement = Employee.pop()
console.log("9-->" + poppedElement);
console.log("9A-->" + Employee)

//UNSHIFT - Add an element starting of the array
console.log("10-->" + Employee.unshift("Mr."));
console.log("11-->" + Employee);

//SHIFT - Removes first element of an array, and returns that and alters the length
console.log("12-->" + Employee.length);
console.log("13-->" + Employee.shift() + " 14-->" + Employee.length);

//LENGTH - Returns the length of the array
console.log("15-->" + "Length of an Array is: " + Employee.length);