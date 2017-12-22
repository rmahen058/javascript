//////////////////////////////////////////////////////////
//This Javascript is built to learn the JavaScript concepts for DOM and DOM Manipulation

// TO GET THE VALUE OF THE DOM
var score0 = document.querySelector('#score-0').textContent;
console.log('Above JS Statement gets the value of the DOM Element with ID score-0 and assign it to variable score0');
console.log("Value of the element with ID 'score-0' is : " + score0);

var text = document.querySelector('.btn-new').textContent;
console.log('Above JS Statement gets the value of the DOM Element with Class btn-new and assign it to variable text');
console.log("Value of the element with Class 'btn-new' is : " + text);

var innerHtmlText = document.querySelector('#score-0').innerHTML;
console.log('Above JS Statement gets the value of the DOM Element with ID score-0 and assign it to the innerHtmlText variable');
console.log("Value of the element with ID 'score-0' is : " + innerHtmlText);

// TO SET THE VALUE IN THE DOM FOR AN ELEMENT
/*
textContent()
This allows to set the content of an DOM Element with the given string only and not HTML
Eg: 
document.querySelector('score-0').textContent = 4;    //This sets the value of the DOM element to 4
document.querySelector('score-0').textContent = 'test' //This sets the value of the DOM element to test
document.querySelector('score-0').textContent = '<em> 4 </em>'  // This not allowed because it an html property
*/

document.querySelector('#score-0').textContent = 200;
document.querySelector('#score-1').textContent = 'test';

/*
innerHtml
This allows to set the content of an DOM Element with the given string as well as html content
Eg:
document.querySelector('#score-0').innerhtml = 422;  //This sets the value of the DOM Element to 422
document.querySelector('#score-1').intterHtml = test; //This sets the value of the DOM Element to test
document.querySelector('#current-0').innerHtml = '<em> 500 </em>' //This is allow using innerHtml
*/

document.querySelector('#current-0').innerHTML = 500;
document.querySelector('#current-1').innerHTML = 'testing';
document.querySelector('#name-0').innerHTML = '<b><em>Modified Player Name</em></b>';


//Query Selector to manipulate DOM
document.querySelector('.dice').style.display = 'none';  //This will hide the dice image in the DOM/ Webpage
document.querySelector('.dice').style.display = 'block'; //This will display the dice image in the DOM/ Webpage

//Get Element by ID
document.getElementById('score-0').innerHTML; //This displays the valur of the element with ID score-0;

//
document.getElementsByClassName('dice'); //This is now point at the DOM for an element which class name as dice