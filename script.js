const apiKey = 'YOUR_OMDB_API_KEY'; // Replace with your actual OMDb API Key
const movieGrid = document.getElementById("movieGrid");

const defaultMovies = ["RRR", "Pathaan", "Avengers", "Inception", "Jawan"];

async function fetchMovie(title) {
  try {
    const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`);
    const data = await res.json();
    return data.Response === "True" ? data : null;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

function displayMovie(data) {
  const card = document.createElement("div");
  card.className = "movieCard";

  const bookingUrl = `https://in.bookmyshow.com/explore/movies?query=${encodeURIComponent(data.Title)}`;

  card.innerHTML = `
    <img src="${data.Poster}" alt="${data.Title}" />
    <h3>${data.Title} (${data.Year})</h3>
    <p>${data.Genre}</p>
    <button onclick="window.open('${bookingUrl}', '_blank')">Book Now</button>
  `;
  movieGrid.appendChild(card);
}

async function loadDefaultMovies() {
  movieGrid.innerHTML = "";
  for (let title of defaultMovies) {
    const movie = await fetchMovie(title);
    if (movie) displayMovie(movie);
  }
}

async function searchMovies() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  movieGrid.innerHTML = "";
  const movie = await fetchMovie(query);
  if (movie) displayMovie(movie);
  else movieGrid.innerHTML = `<p style="text-align:center;">❌ Movie not found</p>`;
}

loadDefaultMovies();
