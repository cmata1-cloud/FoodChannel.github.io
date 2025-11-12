const searchData = [
  {
    title: "Events",
    description: "Learn more about community events happening in Gallup.",
    link: "./cat/Event.html"
  },
  {
    title: "History of Gallup",
    description: "Discover how Gallup, New Mexico was founded and evolved.",
    link: "./cat/History.html"
  },
  {
    title: "Public Library",
    description: "Find information about the local public library and its services.",
    link: "#services"
  },
  {
    title: "Educational Services",
    description: "Explore child care and school services available in Gallup.",
    link: "#services"
  },
  {
    title: "Transportation",
    description: "Learn about transportation assistance programs in Gallup.",
    link: "#services"
  },
  {
    title: "Contact Us",
    description: "Get in touch with our community team.",
    link: "#contact"
  },
  {
    title: "Home",
    description: "Return to the home page.",
    link: "#home"
  },
  {
    title: "About Us",
    description: "Read more about our Gallup community.",
    link: "#about"
  }
];

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

  const results = searchData.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );

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
      results
        .map(
          item =>
            `<li>
              <a href="${item.link}"><strong>${item.title}</strong></a> – ${item.description}
            </li>`
        )
        .join("") +
      "</ul>";
  } else {
    resultsDiv.innerHTML = `<p>No results found for "${query}".</p>`;
  }
}
