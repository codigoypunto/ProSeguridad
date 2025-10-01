function calcularLimites() {

    console.log("- calculando");

    const viewerWidth = viewer.offsetWidth;
    const imageRatio = imgRiesgo.naturalWidth / imgRiesgo.naturalHeight;
    const imageWidth = viewer.offsetHeight * imageRatio;

    if (viewerWidth == 0 || imageRatio == 0 || imageWidth == 0) {
        console.log(viewerWidth);
        console.log(imageRatio);
        console.log(imageWidth);
    }

    container.style.width = `${imageWidth}px`;

    minX = viewerWidth - imageWidth;
    maxX = 0;

    actualX = (viewerWidth - imageWidth) / 2;
    container.style.left = `${actualX}px`;

    touchDrag();
}