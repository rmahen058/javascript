function calculateAge(yearofBirth) {
    var age = 2017 - yearofBirth;
    return age;
}

function yearUntilRetirement(name, yearofBirth) {
    var retirementAge = 65 - calculateAge(yearofBirth);
    if (retirementAge >= 0) {
        console.log(name + " will be retired in " + retirementAge + ".");
    } else {
        console.log(name + " is already retired.");
    }
}

var johnAge = calculateAge(2000);
var mikeAge = calculateAge(1970);
var maryAge = calculateAge(1940);
console.log("John Age: " + johnAge + ", Mike Age: " + mikeAge + ", Mary Age: " + maryAge);

yearUntilRetirement("JOHN", 2000);
yearUntilRetirement("MIKE", 1970);
yearUntilRetirement("MARY", 1940);

//Expression is meant to produce a value, where as Statement will perform some actions only.