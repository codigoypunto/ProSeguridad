function onloadScreen (myScreen) {
    switch (myScreen) {
        case 1:
            screenControl(myScreen,0);
            break;
        case 2:
            screenControl(myScreen,0);
            break;
        case 3:
            screenControl(myScreen,1);
            break;

        case 4:
            screenControl(myScreen,0);
            break;

        case 5:
            screenControl(myScreen,1);
            break;

        case 6:
            screenControl(myScreen,0);
            break;

        case 7:
            screenControl(myScreen,1);
            break;

        case 8:
            screenControl(myScreen,0);
            break;

        default:
            screenID = 0;
            screenControl(screenID  ,0);
    }
    showScreen(screenID);
    console.log("- Iniciando")
    gameInit(myScreen);

    console.log("PANTALLA CARGADA");
}

function screenControl (myScreen, gameOn) {
    console.log("PANTALLA "+myScreen);
    isGame = gameOn;
    if (isGame && myScreen > 1) {
        document.body.style.backgroundImage = 'url("./src/images/background.png")';
        document.getElementById("controller").style.display = 'block';
        document.getElementById("btn-start").style.display = 'none';
        document.getElementById("btn-next").style.display = "block";

        viewer                  = document.getElementById("viewer"+myScreen);
        imgRiesgo               = document.getElementById("imgRiesgo"+myScreen);
        container               = document.getElementById("imgContainer"+myScreen);

        isGame = false;
    } else if (!isGame && myScreen > 1) {
        document.body.style.backgroundImage = 'url("./src/images/background.png")';
        document.getElementById("controller").style.display = 'block';
        document.getElementById("btn-start").style.display = 'block';
        document.getElementById("btn-next").style.display = "none";
    } else if (!isGame && myScreen === 1) {
        document.body.style.backgroundImage = 'url("./src/images/background1.png")';
        document.getElementById("controller").style.display = 'none';
        document.getElementById("btn-start").style.display = 'none';
        document.getElementById("btn-next").style.display = "none";
    } else if (!isGame && myScreen < 1) {
        document.body.style.backgroundImage = 'url("./src/images/background.png")';
        document.getElementById("controller").style.display = 'none';
        document.getElementById("btn-start").style.display = 'none';
        document.getElementById("btn-next").style.display = "none";
    }
    

}