let screenID                = 1;
let score                   = 0;
let isNext                  = false;
let viewer                  = document.getElementById("viewer3");
let imgRiesgo               = document.getElementById("imgRiesgo3");
let container               = document.getElementById("imgContainer3");          

const CONTROLLER            = document.getElementById("controller");
const buttonStart           = document.getElementById('btn-start');
const buttonNext            = document.getElementById('btn-next');
const buttonReset           = document.getElementById("btn-reset");

const E_SCORE               = document.getElementById("score");
const E_MENSAJE             = document.getElementById("msg-score");

let isDragging              = false;
let startX, actualX         = 0;
let minX, maxX;

document.addEventListener(
    "DOMContentLoaded", function() {
        console.log("LOADING");
        onloadScreen(screenID);
    }
);

buttonStart.addEventListener(
    "click", function() {
        console.log("START");
        screenID ++;
        onloadScreen(screenID);
    }
)

buttonNext.addEventListener(
    "click", function() {
        console.log("NEXT");
        screenID ++;
        onloadScreen(screenID);
    }
)

buttonReset.addEventListener(
    "click", function() {
        location.reload();
    }
)