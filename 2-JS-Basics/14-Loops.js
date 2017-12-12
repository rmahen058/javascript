///////////////////////////////////////////////
// LOOPS
///////////////////////////////////////////////

function callSeperator() {
    console.log('----------------------------------')
}

///////////////////////////////////////////////
// FOR LOOP
///////////////////////////////////////////////
for (var i = 0; i < 10; i++) {
    console.log("Value of i is --> " + i);
}

callSeperator();

var Names = ['Rakesh', 'Suma', 'Arya', 'Ramesh', 'Rekha'];
for (i = 0; i < Names.length; i++) {
    console.log(Names[i]);
}

callSeperator();

for (i = Names.length - 1; i >= 0; i--) {
    console.log(Names[i]);
    if(i === 2) {
        break;
    }
}

callSeperator();

///////////////////////////////////////////////
// WHILE LOOP
///////////////////////////////////////////////
i = 0;
while (i < Names.length) {
    console.log("WHILE LOOP: " + Names[i]);
    i++;
}

callSeperator();

for(i = 0; i < 5; i++) {
    if(i ==2) {
        continue;
    }
    console.log(i);
}