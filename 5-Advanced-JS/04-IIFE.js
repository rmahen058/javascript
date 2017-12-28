/////////////////////////////////////////
// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

/*
IIFE:
-----
This is the common pattern in JS.
This helps in creating a data privacy.
*/

var game = function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

//IIFE Function:
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5-5);
})(5);