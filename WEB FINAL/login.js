document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Find user with matching email and password
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // Store logged-in user data in sessionStorage
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            alert('Login successful! Redirecting to profile page...');
            window.location.href = 'profile.html';
        } else {
            alert('Invalid email or password.');
        }
    });
});
