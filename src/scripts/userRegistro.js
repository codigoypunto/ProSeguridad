document.getElementById('registrationForm').addEventListener(
    'submit',
    function(e) {

        e.preventDefault();

        

        const dni           = document.getElementById("dni").value;
        const company       = document.getElementById("company").value;
        const lugar         = document.getElementById("lugar").value;

        const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScOEQGcKyg6R1vZQs1BFm3Rt4bi1GNG-dfWdu1PdmjEs_ZqxQ/formResponse";

        const formData = new FormData();

        formData.append("entry.1245377593", dni);
        formData.append("entry.1112581709", company);
        formData.append("entry.1612326977", lugar)

        fetch(
            googleFormUrl, {
                method: "POST",
                mode: "no-cors",
                body: formData
            }
        )

        /*

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

