/*
FUNCTION CONSTRUCTOR
*/

var james = {
    name : "James",
    yearBirth : 1985,
    job : "Software Engineer"
}

var Person = function(name, yearBirth, job) {
    this.name = name;
    this.yearBirth = yearBirth;
    this.job = job;
    this.calculateAge = function() {
        return 2017-this.yearBirth;
    }
}

var Ramji = new Person("Ramji", 1975, "Software Developer");  //This is called instantiation. this is an instance of an obhect Person

var Prashant = new Person("Prashant", 1982, "Mgr");

console.log(Ramji.name);
console.log(Ramji.calculateAge());

console.log(Prashant.name);
console.log(Prashant.calculateAge());

/*
INHERITANCE
*/

Person.prototype.calculateRetirement = function() {
    this.Age = this.calculateAge();
    return 65 - this.Age;
}

console.log(Ramji.calculateRetirement());
console.log(Prashant.calculateRetirement());

/////////////////////////////////
//OBJECT.CREATE

// FIRST WAY
var personProto = {
    calcuateAge : function() {
        return 2017 - this.yearBirth;
    }
}

var Suma = Object.create(personProto);
Suma.name = "Suma";
Suma.yearBirth = 1990;
Suma.birthState = "Karnataka";

console.log(Suma.calcuateAge());

// SECOND WAY- Object.create will accept second arguement

var Arya = Object.create(personProto, 
    { 
        name : {value : "Arya"},
        yearBirth : {value: 2017},
        birthState : {value : "AR"},
        bitthCity : {value : "Bentonville"}
    })

console.log(Arya.calcuateAge());
