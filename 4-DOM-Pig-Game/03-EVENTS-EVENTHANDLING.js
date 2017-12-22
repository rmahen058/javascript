////////////////////////////////////////////////////////
// THIS JAVASCRIPT DEALS WITH THE CONCEPTS OF EVENTS AND EVENT HANDLING

/*
EVENTS:
Events are the notifications that are sent to notify the code that something happened on the webpage.
Eg: Clicking a button, Resizing the Window, Scrolling doen, pressing a key etc.

EVENT LISTENER:
Event listener is the function that performs an action based on a certain event. It waits for a specific event to happen.

See the picture representation of this concept in the tutorial.
*/

//CALLBACK FUNCTION:
function btnClick() {
    //Do something here
}

document.querySelector('.btn-roll').addEventListener('click', btnClick); 
/*
Above we don't call the function as onClick() because of Callback concept.
Name of the function without parnthesis.
Function that we pass into other function as an arguement.
Function which is called by eventlistener in this case.
*/


//ANONYMOUS FUNCTION:
document.querySelector('.btn-roll').addEventListener('click' function() {
    //this is an anonymous function because it can only be used here and cannot be used anywhere else.
    //this is called only upon when someone clicjs this .btn-roll
})

//CHANGING THE IMAGES IN THE DOCUMENT ELEMENT
document.getElementById()

