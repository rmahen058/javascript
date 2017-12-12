var name = prompt("Enter your name");
var isMarried = prompt("Are you married?");
if(isMarried == 'Yes') {
    isMarried = true;
} else {
    isMarried = false;
}

if(isMarried) {
    console.log(name + " is Married.");
} else {
    console.log(name + "is not Married.");
}

if(24 == "23") {
    console.log("JS dynamically process type coersion");
} 
else if (!(24 === "23")) {
    console.log('Typecoersion doesn\'t occur');
} else {
    console.log("Here you are!!")
}