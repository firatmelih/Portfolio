'use strict';
//Typer Coded by github.com/firatmelih && Decleration phase.
async function Typer() {
    if (j == txt.length) {
        setTimeout(cursorBlink, speed);
        await sleep(4000);
    }
    if (i < txt.length) {
        textToType.innerHTML += txt.charAt(i);
        i++;
        setTimeout(Typer, speed);
        j = i;
    }
    else if (j > 0) {
        textToType.innerHTML = textToType.innerHTML.slice(0, -1);
        j--;
        setTimeout(Typer, (speed / 3));
    }
    if (textToType.innerHTML == '') {
        k++;
        txt = txtArray[k];
        i = 0;
        if (k >= txtArray.length) {
            k = 0;
            txt = txtArray[k];
        }
    }
}
async function cursorBlink() {
    for (let counter = 0; counter < 3; counter++) {
        cursor.innerHTML += '|';
        await sleep(500);
        cursor.innerHTML = '';
        await sleep(500);
    }
    cursor.innerHTML = '';
    counter = 0;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Calling and running functions
var [i, j, k] = [0, 0, 0];
let txtArray = ['a Developer', 'Programmer', 'Student', 'Melih']
var txt = txtArray[k];
var speed = 150;
var textToType = document.getElementById("typer");
var cursor = document.getElementById("cursor");
Typer();