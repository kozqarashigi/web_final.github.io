
// for my book recomendations
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const bookCards = document.querySelectorAll('.book-card');
    const savedFilter = localStorage.getItem('bookFilter') || 'all';

    // Apply the saved filter when the page loads
    filterBooks(savedFilter);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterBooks(filter);
            localStorage.setItem('bookFilter', filter);  // Save filter to local storage
        });
    });

    function filterBooks(filter) {
        bookCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Highlight active filter button
        filterButtons.forEach(button => {
            button.classList.toggle('active', button.getAttribute('data-filter') === filter);
        });
    }
});

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsDiv = document.getElementById("results");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchBooks(query);
  } else {
    resultsDiv.innerHTML = "<p>Please enter a search term.</p>";
  }
});

function fetchBooks(query) {
  const API_URL = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

  fetch(API_URL)
    .then(response => response.json())
    .then(data => displayBooks(data.docs))
    .catch(error => {
      console.error("Error fetching books:", error);
      resultsDiv.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    });
}

function displayBooks(books) {
  resultsDiv.innerHTML = "";

  if (!books || books.length === 0) {
    resultsDiv.innerHTML = "<p>No results found. Try searching for something else!</p>";
    return;
  }

  books.forEach(book => {
    const title = book.title || "No title available";
    const author = book.author_name ? book.author_name.join(", ") : "Unknown author";
    const firstPublished = book.first_publish_year || "Unknown year";
    const bookLink = book.key ? `https://openlibrary.org${book.key}` : "#";

    const bookElement = document.createElement("div");
    bookElement.classList.add("book-result-card");
    bookElement.innerHTML = `
      <h3>${title}</h3>
      <p><strong>Author(s):</strong> ${author}</p>
      <p><strong>First Published:</strong> ${firstPublished}</p>
      <a href="${bookLink}" target="_blank" rel="noopener noreferrer">View Details</a>
    `;
    resultsDiv.appendChild(bookElement);
  });
}

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
