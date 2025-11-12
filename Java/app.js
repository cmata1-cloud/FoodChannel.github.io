// === Search Bar Functionality ===
document.getElementById("searchBtn").addEventListener("click", performSearch);

document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const resultsDiv = document.getElementById("searchResults");

  if (!query) {
    resultsDiv.style.display = "none";
    resultsDiv.innerHTML = "";
    return;
  }

  // Collect searchable text from page sections
  const sections = document.querySelectorAll("h1, h2, p, a");
  let results = [];

  sections.forEach((section) => {
    if (section.textContent.toLowerCase().includes(query)) {
      results.push(section.textContent);
    }
  });

  // Display results
  resultsDiv.style.display = "block";
  if (results.length > 0) {
    resultsDiv.innerHTML = `<h3>Search Results for "${query}":</h3><ul>` +
      results.map(item => `<li>${item}</li>`).join("") +
      "</ul>";
  } else {
    resultsDiv.innerHTML = `<p>No results found for "${query}".</p>`;
  }
}
