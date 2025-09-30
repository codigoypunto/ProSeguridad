let screenID                = 1;
let score                   = 0;
let viewer                  = document.getElementById("viewer3");
let imgRiesgo               = document.getElementById("imgRiesgo3");
let container               = document.getElementById("imgContainer3");          

const buttonStart           = document.getElementById('btn-start');
const buttonNext            = document.getElementById('btn-next');

let isDragging = false;
let startX, actualX = 0;
let minX, maxX;


document.addEventListener(
    "DOMContentLoaded", function() {
        onloadScreen(screenID);
    }
);

buttonStart.addEventListener(
    "click", function() {
        screenID ++;
        onloadScreen(screenID);
    }
)

buttonNext.addEventListener(
    "click", function() {
        screenID ++;
        onloadScreen(screenID);
    }
)