// DOM Elements
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Fetch the JSON data
async function fetchHadithData() {
  try {
    const response = await fetch("/nawawi40.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const hadiths = data.hadiths; // Extract the hadiths array
    initializeSearch(hadiths);
  } catch (error) {
    console.error("Failed to fetch Hadith data:", error);
  }
}

// Initialize search functionality
function initializeSearch(hadiths) {
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    searchResults.innerHTML = ""; // Clear previous results

    if (query.trim() === "") {
      return; // Do nothing if the search input is empty
    }

    // Filter the Hadiths based on the search query
    const filteredHadiths = hadiths.filter((hadith) =>
      hadith.english.text.toLowerCase().includes(query)
    );

    // Display the search results
    filteredHadiths.forEach((hadith) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
          <div class="card-body">
              <h5 class="card-title">Hadith ${hadith.number}</h5>
              <p class="card-text">${highlightText(
                hadith.english.text,
                query
              )}</p>
          </div>
      `;
      searchResults.appendChild(card);
    });
  });
}

// Function to highlight the search query in the Hadith text
function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, '<span class="highlight">$1</span>');
}

// Fetch the Hadith data when the page loads
fetchHadithData();
