document
    .getElementById("signupForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        document
        .querySelectorAll(".error")
        .forEach(function (element) {
            element.remove();
        });


        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const refer = document.getElementById("refer").value;
        const terms = document.getElementById("terms").checked;

        let valid = true;

        if(!name){
            valid = false;
            document
                .getElementById("name")
                .insertAdjacentHTML("afterend", "<div class='error'>Name is required</div>");   
        }

        if(!validateEmail(email)){
            valid = false;
            document
                .getElementById("email")
                .insertAdjacentHTML("afterend", "<div class='error'>Email is invalid</div>");
        }

        if(!validatePassword(password)){
            valid = false;
            document
                .getElementById("password")
                .insertAdjacentHTML("afterend", "<div class='error'>Password is invalid</div>");
        }

        if(!validatePhone(phone)){
            valid = false;
            document
                .getElementById("phone")
                .insertAdjacentHTML("afterend", "<div class='error'>Phone is invalid</div>");
        }
        
        if(!terms){
            valid = false;
            document
                .getElementById("terms")
                .insertAdjacentHTML("afterend", "<div class='error'>You must accept the terms</div>");
        }

        if(valid){
            alert("Form submitted Correctly");
            this.submit();
        }
    });

    function validateEmail(email){
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePassword(password){
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        return re.test(password);
    }
