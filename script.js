let screenID                = 1;
let score                 = 0;

const buttonStart           = document.getElementById('btn-start');
const buttonNext            = document.getElementById('btn-next');
// let container;





document.addEventListener(
    "DOMContentLoaded", function() {
        onloadScreen(screenID);
    }
);

buttonStart.addEventListener(
    "click", function() {
        console.log("Boton start")
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

function onloadContainer () {
    
    console.log(container);
}