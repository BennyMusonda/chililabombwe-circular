// =========================================
// CHILILABOMBWE CIRCULAR - REGISTRATION DEMO
// =========================================


// =========================================
// GET REGISTRATION FORM
// =========================================

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function(event) {

            // STOP THE PAGE FROM RELOADING

            event.preventDefault();


            // GET FORM VALUES

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const role =
                document.getElementById("role").value;

            const password =
                document.getElementById("password").value;


            // GET MESSAGE AREA

            const message =
                document.getElementById("registerMessage");


            // =========================================
            // BASIC VALIDATION
            // =========================================

            if (!name || !email || !role || !password) {

                message.className =
                    "error-message";

                message.innerHTML =
                    "Please complete all required fields.";

                return;

            }


            if (password.length < 6) {

                message.className =
                    "error-message";

                message.innerHTML =
                    "Password should contain at least 6 characters.";

                return;

            }


            // =========================================
            // DEMO SUCCESS
            // =========================================

            message.className =
                "success-message";


            message.innerHTML =
                "✓ Account created successfully! " +
                "Welcome to Chililabombwe Circular, " +
                name +
                ".<br><br>" +
                "This is the frontend hackathon demo. " +
                "The account will be connected to the MySQL backend in the full MVP.";


            // =========================================
            // CLEAR PASSWORD
            // =========================================

            document.getElementById("password").value = "";


            console.log(
                "Demo registration:",
                {
                    name: name,
                    email: email,
                    phone: phone,
                    role: role
                }
            );

        }
    );

}