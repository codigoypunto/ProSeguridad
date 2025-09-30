function gameInit(myScreen) {
    switch (myScreen) {
        case 2:
            container   = document.getElementById("imgContainer"+(myScreen+1));
            break

        case 3:
            viewer      = document.getElementById("viewer"+myScreen);
            imgRiesgo   = document.getElementById("imgRiesgo"+myScreen);
            break;

        case 4:
            container   = document.getElementById("imgContainer"+(myScreen+1));
            break

        case 5:
            viewer      = document.getElementById("viewer"+myScreen);
            imgRiesgo   = document.getElementById("imgRiesgo"+myScreen);
            container   = document.getElementById("imgContainer"+(myScreen));
            break;

        case 6:
            container   = document.getElementById("imgContainer"+(myScreen+1));
            break

        case 7:
            viewer      = document.getElementById("viewer"+myScreen);
            imgRiesgo   = document.getElementById("imgRiesgo"+myScreen);
            container   = document.getElementById("imgContainer"+(myScreen));
            break;

        default:
            viewer      = document.getElementById("viewer3");
            imgRiesgo   = document.getElementById("imgRiesgo3");
            container   = document.getElementById("imgContainer3");
    }


    console.log("iniciando");

    calcularLimites();
}