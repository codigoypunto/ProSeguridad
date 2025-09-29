document.getElementById('registrationForm').addEventListener(
    'submit',
    function(e) {

        e.preventDefault();

        /* 

        const dni           = document.getElementById("dni").value;
        const company       = document.getElementById("company").value;

        // const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScZnJW2-pnDDRpOOlnNxM6D4yaEUFbCZRWKtMDSvjrXVsUkHw/formResponse";
        const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeRfJ0mYkdGaAQ4qw7GCP8e0ZlIoiJYmtesrygTYcAJomjnvg/formResponse";

        const formData = new FormData();

        formData.append("entry.569176739", dni);
        formData.append("entry.953392232", company);

        fetch(
            googleFormUrl, {
                method: "POST",
                mode: "no-cors",
                body: formData
            }
        )
            
        */

        document.getElementById("registrationForm").reset();
        screenID++;
        onloadScreen(screenID)
        showScreen(screenID);
        
        // document.getElementById("controller").style.display = 'block';
        // document.getElementById("btn-start").style.display = 'block';

        // document.body.style.backgroundImage = 'url("./src/images/background.png")';
    }
);

