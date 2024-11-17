document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signUpForm');
    
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (name && email && password.length >= 8) {
            // Retrieve existing users or initialize an empty array
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Check if the email already exists
            const emailExists = users.some(user => user.email === email);
            if (emailExists) {
                alert('This email is already registered. Please use another one.');
                return;
            }

            // Store new user data
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            
            alert('Sign-up successful! Redirecting to login page...');
            window.location.href = 'loginpage.html';
        } else {
            alert('Please fill out all fields correctly.');
        }
    });
});
