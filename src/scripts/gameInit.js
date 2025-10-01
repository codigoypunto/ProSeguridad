function gameInit(myScreen) {
    switch (myScreen) {
        case 1:
            console.log("- Registro")
            break

        case 2:
            onloadInit(myScreen);
            break

        case 3:
            calcularLimites();
            break;

        case 4:
            onloadInit(myScreen);
            break

        case 5:
            calcularLimites();
            break;

        case 6:
            onloadInit(myScreen);
            break

        case 7:
            calcularLimites();
            break;

        default:
            viewer      = document.getElementById("viewer3");
            imgRiesgo   = document.getElementById("imgRiesgo3");
            container   = document.getElementById("imgContainer3");
    }
}

function onloadInit(myScreen) {
    viewer      = document.getElementById("viewer"+(myScreen+1));
    imgRiesgo   = document.getElementById("imgRiesgo"+(myScreen+1));
    container   = document.getElementById("imgContainer"+(myScreen+1));
}