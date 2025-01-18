document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signupForm");
    const successMessage = document.getElementById('success-message');

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let valid = true;

        // Clear previous error messages and success message
        document.querySelectorAll('.error-message').forEach((message) => {
            message.style.display = 'none';
        });
        successMessage.style.display = 'none'; 


        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;


        if (!firstName) {
            document.getElementById('first-name-error').style.display = 'block';
            valid = false;
        }


        if (!lastName) {
            document.getElementById('last-name-error').style.display = 'block';
            valid = false;
        }


        if (!username) {
            document.getElementById('username-error').style.display = 'block';
            valid = false;
        }


        if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
            document.getElementById('email-error').style.display = 'block';
            valid = false;
        }


        if (!mobile || !/^09\d{9}$/.test(mobile)) {
            document.getElementById('mobile-error').style.display = 'block';
            valid = false;
        }


        if (!password || password.length < 6) {
            document.getElementById('password-error').style.display = 'block';
            valid = false;
        }

        if (password !== confirmPassword) {
            document.getElementById('confirm-password-error').style.display = 'block';
            valid = false;
        }


        if (valid) {
            successMessage.style.display = 'block';
            form.reset(); 
        }
    });
});
