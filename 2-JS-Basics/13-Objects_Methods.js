///////////////////////////////////////////
// OBJECTS AND METHODS

/*
Objects can also have 
Arrays,
Function
*/

///////////////////////////////////////////
// VERSION- 1
///////////////////////////////////////////
var Rakesh = {
    Name: 'Rakesh',
    yearBirth: 1985,
    Sex: 'Male',
    Nationality: 'Indian',
    isMarried: true,
    Family: ['Ramesh', 'Rekha', 'Suma', 'Arya'],
    CalculateAge: function(yearofBirth) {
        return 2017 - yearofBirth;
    }
};

console.log(Rakesh);
console.log(Rakesh.Name);
console.log(Rakesh.Family);
console.log(Rakesh.Family[2]);
console.log(Rakesh.CalculateAge(1985));

///////////////////////////////////////////
// VERSION- 2
///////////////////////////////////////////
var Suma = {
    Name: 'Suma',
    yearBirth: 1990,
    Sex: 'Female',
    Nationality: 'Indian',
    isMarried: true,
    Family: ['Subhash', 'Annapurna', Rakesh, 'Arya'],
    CalculateAge: function() {
        return 2017 - this.yearBirth;
    }
};

console.log(Suma);
console.log(Suma.Name);
console.log(Suma.Family[3]);
console.log(Suma.Family[2]);
console.log(Suma.CalculateAge());

///////////////////////////////////////////
// VERSION- 3
///////////////////////////////////////////
var Arya = {
    Name: 'Arya',
    yearBirth: 2017,
    Sex: 'Male',
    Nationality: 'American',
    isMarried: false,
    Family: [Rakesh, Suma],
    CalculateAge: function() {
        this.Age = 2017 - this.yearBirth;
    }
};

console.log(Arya);
Arya.CalculateAge();
console.log(Arya.Age);