var A = 0;
var B = 0;
var C = 0;
var D = 0;
var I = 0;
var F = 0;
var index = 0;

var div_0 = document.getElementById("0");
var div_1 = document.getElementById("1");
var div_2 = document.getElementById("2");
var div_3 = document.getElementById("3");

var div_A = document.getElementById("A");
var div_B = document.getElementById("B");
var div_C = document.getElementById("C");
var div_D = document.getElementById("D");
var div_I = document.getElementById("I");
var div_F = document.getElementById("F");

var button_start = document.getElementById("start");
var buttons = document.getElementsByTagName("button");

button_start.addEventListener('click', () => {
    index++;
    div_0.className = "card_none";
    div_1.className = "card";
})

function next(letter) {
    if (letter == "A") {
        A++;
    } else if (letter == "B") {
        B++;
    } else if (letter == "C") {
        C++;
    } else if (letter == "D") {
        D++;
    } else if (letter == "I") {
        I++;
    } else if (letter == "F") {
        F++;
    }
    document.getElementById(index).className = "card_none";
    index++;
    if (index > 7) {
        var arr = [A, B, C, D, I, F];
        arr.sort();
        switch (arr[5]) {
            case A: div_A.className = "card"; break;
            case B: div_B.className = "card"; break;
            case C: div_C.className = "card"; break;
            case D: div_D.className = "card"; break;
            case I: div_I.className = "card"; break;
            case F: div_F.className = "card"; break;
        }
    } else {
        document.getElementById(index).className = "card";
    }
}