////////////////////////////////////////
//FUNCTIONS:
/*
Functions is an instanse of an object type.
Functions behaves like any other Object.
We can store function as a variable.
We can pass a functions as an arguement to another function.
We can return a function from a function.

All the above points together is called as First Class Functions.

*/

////////////////////////////////////////
//FIRST CLASS FUNCTIONS:

//PASSING FUNCTIONS AS AN ARGUEMENT

var year = [1985, 1965, 1837, 1998, 2000];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for(var i=0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2017 - el;
}
    
function isMajor(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <=81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}
var ages = arrayCalc(year, calculateAge);
console.log(ages);

var isMajorRes = arrayCalc(ages, isMajor)
console.log(isMajorRes);

var MaxHearRateRes = arrayCalc(ages, maxHeartRate);
console.log(MaxHearRateRes);


/////////////////////////////////
//FUNCTION RETURNING FUNCTION

var birthState = function(stateCode) {
    switch (stateCode) {
        case "AR" :
            return function(name) {
                console.log(name + ", You were born in " + stateCode + ".");
            }
            break;
    case "TX" :
            return function(name) {
                console.log(name + ", You are texan.");
            }
            break;
    default :
            return function(name) {
                console.log(name + ", Please contact Administrator?");
            }
            break;
    }
}

var state = birthState("AR");
state("Rakesh");

birthState("TX")("Suma");
birthState("CA")("Mr.");
