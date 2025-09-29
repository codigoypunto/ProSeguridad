
let container               = document.getElementById("imgContainer3");


let isDragging = false;
let startX, actualX = 0;

let viewer;
let imgRiesgo;
let minX, maxX;


// 
 
function calcularLimites() {
    const viewerWidth = viewer.offsetWidth;
    const imageRatio = imgRiesgo.naturalWidth / imgRiesgo.naturalHeight;
    const imageWidth = viewer.offsetHeight * imageRatio;

    container.style.width = `${imageWidth}px`;
    console.log(viewer.offsetWidth);

    minX = viewerWidth - imageWidth;
    maxX = 0;

    actualX = (viewerWidth - imageWidth) / 2;
    container.style.left = `${actualX}px`;
}


function gameInit(numero) {

    viewer = document.getElementById("viewer"+numero);
    imgRiesgo = document.getElementById("imgRiesgo"+numero);
    
    
    console.log("iniciando juego");
    console.log(container);
    calcularLimites();
}




container.addEventListener(
    "touchstart", e => {
        isDragging = true;
        startX = e.touches[0].clientX - actualX;
        console.log(startX);
    }
);

container.addEventListener(
    "touchmove", e => {
        if (!isDragging) return;
        actualX = e.touches[0].clientX - startX;

        if (actualX > maxX) actualX = maxX;
        if (actualX < minX) actualX = minX;

        container.style.left = `${actualX}px`;
        // console.log(actualX);
    }
);

container.addEventListener(
    "touchend", () => {
        isDragging = false;
    }
);

document.querySelectorAll(".hotspot").forEach(
    hotspot => {
        hotspot.addEventListener(
            "click", () => {
                if (!hotspot.classList.contains("found")) {
                    hotspot.classList.add("found");
                    score++;
                }
            }
        );
    }
);



