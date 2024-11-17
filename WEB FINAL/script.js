// toggle switching modes
document.addEventListener('DOMContentLoaded', function() {
    const modeToggler = document.getElementById('modeToggler');
    const body = document.body;

    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
        body.classList.add(savedMode);
        modeToggler.textContent = savedMode === 'day-mode' ? 'Switch to Night Mode' : 'Switch to Day Mode';
    } else {
        body.classList.add('day-mode'); // to day mode by default 
        modeToggler.textContent = 'Switch to Night Mode';
    }

    modeToggler.addEventListener('click', function() {
        if (body.classList.contains('day-mode')) {
            body.classList.remove('day-mode');
            body.classList.add('night-mode');
            modeToggler.textContent = 'Switch to Day Mode';
            localStorage.setItem('theme', 'night-mode');
        } else {
            body.classList.remove('night-mode');
            body.classList.add('day-mode');
            modeToggler.textContent = 'Switch to Night Mode';
            localStorage.setItem('theme', 'day-mode');
        }
    });
});


//* for read more part
document.getElementById("myBtn").addEventListener("click", function() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}); 

// Functionality to load more products
document.getElementById("loadMoreBtn").addEventListener("click", function() {
    var products = [
        "App: Headspace - Mindfulness and Meditation",
        "Book: 'Mindset' by Carol S. Dweck",
        "Workshop: 'Goal Setting for Success'",
        "Podcast: 'The Tim Ferriss Show'"
    ];

    var productContainer = document.getElementById("products");
    
    // Append new product items
    products.forEach(function(product) {
        var li = document.createElement("li");
        li.textContent = product;
        productContainer.appendChild(li);
    });

    // Disable the button after loading more content
    this.disabled = true;
    this.innerText = "All products loaded";
});

//to check
document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signUpForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get values from form fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            console.log(name, email, password); // Check values in console

            // Perform your validation and submission logic here
            if (name && email && password.length >= 8) {
                // Store data in localStorage or handle it accordingly
                localStorage.setItem('name', name);
                localStorage.setItem('email', email);

                alert('Sign-up successful! Redirecting to login page...');
                window.location.href = 'login.html'; // Redirect to login page
            } else {
                alert('Please fill out all fields correctly.');
            }
        });
    } else {
        console.log('Sign-up form not found.');
    }
});
