'use strict';

//Typer Coded by github.com/firatmelih
var [i, j, k] = [0, 0, 0];
let txtArray = ['Hello World!', 'I am Melih', 'Wellcome to my page.', 'check my github ;)']
var txt = txtArray[k];
var speed = 150;
var textToType = document.getElementById("typer");
var cursor = document.getElementById("cursor");
Typer();

function Typer() {
    if (i < txt.length) {
        setTimeout(cursorBlink, speed * 2);
        textToType.innerHTML += txt.charAt(i);
        i++;
        setTimeout(Typer, speed);
        j = i;
    }
    else if (j > 0) {
        textToType.innerHTML = textToType.innerHTML.slice(0, -1);
        j--;
        setTimeout(Typer, (speed / 3), cursor.hidden = true);
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
// to get a blinking cursor effect.
function cursorBlink() {
    if (cursor.hidden) cursor.hidden = false;
    else cursor.hidden = true;
}
