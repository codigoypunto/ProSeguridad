function onloadScreen (myScreen) {
    // onloadContainer(myScreen);
    switch (myScreen) {
        case 1:
            console.log("cargando pantalla 1");
            document.body.style.backgroundImage = 'url("./src/images/background1.png")';
            document.getElementById("controller").style.display = 'none';
            document.getElementById("btn-start").style.display = 'none';
            document.getElementById("btn-next").style.display = "none";
            break;
        case 2:
            console.log("cargando pantalla 2");
            document.body.style.backgroundImage = 'url("./src/images/background.png")';
            document.getElementById("controller").style.display = 'block';
            document.getElementById("btn-start").style.display = 'block';
            document.getElementById("btn-next").style.display = "none";
            break;
        case 3:
            console.log("cargando pantalla 3");
            document.body.style.backgroundImage = 'url("./src/images/background.png")';
            document.getElementById("controller").style.display = 'block';
            document.getElementById("btn-start").style.display = 'none';
            document.getElementById("btn-next").style.display = "block";
            break;

        case 4:
            console.log("cargando pantalla 4");
            document.body.style.backgroundImage = 'url("./src/images/background.png")';
            document.getElementById("controller").style.display = 'block';
            document.getElementById("btn-start").style.display = 'block';
            document.getElementById("btn-next").style.display = "none";
            break;

        case 5:
            console.log("cargando pantalla 5");
            document.body.style.backgroundImage = 'url("./src/images/background.png")';
            document.getElementById("controller").style.display = 'block';
            document.getElementById("btn-start").style.display = 'none';
            document.getElementById("btn-next").style.display = "block";
            break;

        case 6:
            console.log("cargando pantalla 6");
            document.body.style.backgroundImage = 'url("./src/images/background.png")';
            document.getElementById("controller").style.display = 'block';
            document.getElementById("btn-start").style.display = 'block';
            document.getElementById("btn-next").style.display = "none";
            break;

        case 7:
            console.log("cargando pantalla 7");
            document.body.style.backgroundImage = 'url("./src/images/background.png")';
            document.getElementById("controller").style.display = 'block';
            document.getElementById("btn-start").style.display = 'none';
            document.getElementById("btn-next").style.display = "block";
            break;

        case 8:
            console.log("cargando pantalla 8");
            document.body.style.backgroundImage = 'url("./src/images/background.png")';
            document.getElementById("controller").style.display = 'block';
            document.getElementById("btn-start").style.display = 'none';
            document.getElementById("btn-next").style.display = "block";
            break;

        case 9:
            console.log("cargando pantalla 8");
            document.body.style.backgroundImage = 'url("./src/images/background.png")';
            document.getElementById("controller").style.display = 'none';
            document.getElementById("btn-start").style.display = 'none';
            document.getElementById("btn-next").style.display = "none";
            break;

        default:
            console.log("no hay pantallas");
    }
    showScreen(screenID);
    gameInit(myScreen);
    console.log(score);
}