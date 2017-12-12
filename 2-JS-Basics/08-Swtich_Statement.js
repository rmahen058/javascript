var job = prompt("What does John do for living?");

switch (job) {
    case "Teacher":
        console.log("John is a teacher.");
        break;
        
    case "Driver":
        console.log("John is a driver.");
        break;
        
    case "Engineer":
        console.log("John is a engineer.");
        break;
        
    default:
        console.log("John does some job.");
}

var userNumber = 19;

switch (userNumber) {
    case (userNumber < 20):
        console.log("User number is below 20");
        break;
        
    case (userNumber > 19 && userNumber < 60):
        console.log("User number is between 21 and 59.")
        break;
        
    default:
        console.log("User number is above 59.")
}