////////////////////////////////////////
// CODING CHALLENGE 1

/*
John and a friend invented a single game where the player 
with the highest value of his height (in centemeters) plus
five times his age wins:

1. Create variables for heights and ages of two friends
and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to tha console. 
Include the score in the string that you output to the console. Don't forget that there cab be a draw (both players with the same score).

4. EXTRA: Add a third player and noe decide who wins.
*/

var johnHeight = 100;
var johnAge = 10;

var friendHeight = 100;
var friendAge = 10;

var scoreJohn = johnHeight + johnAge * 5;
console.log("John's Score: " + scoreJohn);

var scoreFriend = friendHeight + friendAge * 5;
console.log("First Friend Score: " + scoreFriend);

if (scoreFriend === scoreJohn) {
    console.log("We have a draw!!.");
} else if (scoreFriend > scoreJohn) {
    console.log("John's friend is the winner!!.")
} else {
    console.log("John is the winner!!.");
}

var secondHeight = 100;
var secondAge = 10;

var scoreSecFriend = secondHeight + secondAge * 5;
console.log("Second Friend Score: " + scoreSecFriend);

if (scoreJohn > scoreFriend && scoreJohn > scoreSecFriend) {
    console.log("John is the winner!!.")
} else if (scoreFriend > scoreJohn && scoreFriend > scoreSecFriend) {
    console.log("First Friend is the Winner!!.")
} else if (scoreFriend == scoreSecFriend && scoreFriend == scoreJohn) {
    console.log("We have a draw!!.")
} else {
    console.log("Second friend is the Winner!!.");
}
