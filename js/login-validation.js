document.getElementById("loginForm").addEventListener("submit", function(event) {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    var usernameError = document.getElementById("username-error");
    var passwordError = document.getElementById("password-error");

    var valid = true;


    usernameError.textContent = '';
    passwordError.textContent = '';


    if (username.trim() === "") {
        usernameError.textContent = "Username is required."; 
        valid = false;
    }


    if (password.trim() === "") {
        passwordError.textContent = "Password is required.";
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});
