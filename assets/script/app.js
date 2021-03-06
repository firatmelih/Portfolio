//Typer Coded by github.com/firatmelih

var [i, j, k] = [0, 0, 0];
var txt = 'Hello World!';
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
    if (j == 0) {
        k++;
        i = 0;
        switch (k) {
            case 1:
                txt = 'I am Melih';
                break;
            case 2:
                txt = 'I am a Programmer.';
                break;
            case 3:
                txt = 'Wellcome to my page.';
            case 4:
                txt = 'Hello World!';
                k = 0;
                break
            default:
        }
    }
}

// to get a blinking cursor effect.

function cursorBlink() {
    if (cursor.hidden) cursor.hidden = false;
    else cursor.hidden = true;
}
