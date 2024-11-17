document.addEventListener('DOMContentLoaded', function() {
    // Retrieve logged-in user from sessionStorage
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        // Display user info
        document.getElementById('userName').textContent = `Name: ${loggedInUser.name}`;
        document.getElementById('userEmail').textContent = `Email: ${loggedInUser.email}`;
    } else {
        // If no user is logged in, redirect to login page
        window.location.href = 'login.html';
    }

    // Logout button functionality
    document.getElementById('logoutButton').addEventListener('click', function() {
        sessionStorage.removeItem('loggedInUser'); // Clear logged-in user data
        alert('Logged out successfully.');
        window.location.href = 'index.html'; // Redirect to home page
    });
});
