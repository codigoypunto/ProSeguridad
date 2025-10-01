function onloadScreen (myScreen) {
    switch (myScreen) {
        case 0:
            screenControl(myScreen,0);
            break;

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
            screenControl(myScreen,1);
            break;

        default:
            screenID = 0;
            onloadScreen(screenID);
    }
    showScreen(screenID);
    console.log("- Iniciando")
    gameInit(myScreen);

    endGame();    

    console.log("PANTALLA CARGADA");
}

function screenControl (myScreen, nextOn) {
    console.log("PANTALLA "+myScreen);
    isNext = nextOn;
    if (isNext && myScreen > 1) {
        document.body.style.backgroundImage = 'url("./src/images/background.png")';
        CONTROLLER.style.display = 'block';
        buttonStart.style.display = 'none';
        buttonNext.style.display = "block";
        buttonReset.style.display = "none";

        viewer                  = document.getElementById("viewer"+myScreen);
        imgRiesgo               = document.getElementById("imgRiesgo"+myScreen);
        container               = document.getElementById("imgContainer"+myScreen);

        isGame = false;
    } else if (!isNext && myScreen > 1) {
        document.body.style.backgroundImage = 'url("./src/images/background.png")';
        CONTROLLER.style.display = 'block';
        buttonStart.style.display = 'block';
        buttonNext.style.display = "none";
        buttonReset.style.display = "none";
    } else if (!isNext && myScreen === 1) {
        document.body.style.backgroundImage = 'url("./src/images/background1.png")';
        CONTROLLER.style.display = 'none';
        buttonStart.style.display = 'none';
        buttonNext.style.display = "none";
        buttonReset.style.display = "none";
    } else if (!isNext && myScreen < 1) {
        document.body.style.backgroundImage = 'url("./src/images/background.png")';
        CONTROLLER.style.display = 'block';
        buttonStart.style.display = 'none';
        buttonNext.style.display = "none";
        buttonReset.style.display = "block";
    }
}

function endGame() {
    console.log("- score: "+score);
    E_SCORE.innerText = score;
    if (score < 4) {
        E_MENSAJE.innerText = "Intentalo otra vez";
    } else if (score > 4 && score < 9) {
        E_MENSAJE.innerText = "Puedes mejorar";
    } else if (score == 9) {
        E_MENSAJE.innerText = "¡LO LOGRASTE!";
    }
}